const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/mailTemplates/surveyTemplate');
const groupBy = require('../utils/groupBy');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => res.send('Thank you for voting'));

  app.post('/api/surveys/webhooks', (req, res) => {
    const events = req.body
      .map(({ email, url }) => {
        const eventUrl = new URL(url);
        const urlPath = eventUrl.pathname;

        if (urlPath) {
          const [, , , surveyId, choice] = urlPath.split('/');

          return {
            surveyId,
            choice,
            email,
          };
        }

        return undefined;
      })
      .filter(event => event !== undefined);

    groupBy(events, 'email', 'surveyId').forEach(({ surveyId, email, choice }) => {
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false },
          },
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date(),
        },
      ).exec();
    });

    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const {
      title, subject, body, recipients,
    } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // send email, save survey, substract credits from user, update user
    // return updated user object to the client
    // if request will throw error, send response to the client with status and err object
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
