const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { googleClientID, googleClientSecret } = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user));
});

passport.use(new GoogleStrategy({
  clientID: googleClientID,
  clientSecret: googleClientSecret,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        // user exsists, should call done() with two arguments
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
      }
    })

}
));