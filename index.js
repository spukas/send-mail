const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/User');
require('./models/Survey');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const surveyRoutes = require('./routes/surveyRoutes');
const { mongoURI, cookieKey } = require('./config/keys');

mongoose.connect(mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // serve production assets
  app.use(express.static('client/build'));

  // serve index.html file if express did not recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
