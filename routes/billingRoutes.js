const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const { body: { id: stripeToken }, user: userModel } = req;
    const chargeObject = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 credits for 5 $',
      source: stripeToken,
    });

    // user model can by accessed through req.user, which is set up by passport
    userModel.credits += 5;
    const user = await userModel.save();

    res.send(user);
  });
};
