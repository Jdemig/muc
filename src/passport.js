import passport from 'passport';
import User from './data/models/User';
import config from './config';
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
import LocalStrategy from 'passport-local';

const localOptions = { usernameField: 'email', passwordField: 'password' };

// Setting up local login strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {  
  console.log('hit strategy')
  User.findOne({ email: email }, function(err, user) {
    if(err) { return done(err); }
    if(!user) { return done(null, {}, { message: "It doesn't look like you've made an account yet." }); }
    console.log('hello')
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, {}, { message: "Your password is incorrect" }); }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  // Telling Passport where to find the secret
  secretOrKey: config.auth.jwt.secret
};

// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) { 
  User.findById(payload._id, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);