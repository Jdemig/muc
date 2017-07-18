"use strict"
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/User';
import config from '../../config';

const generateToken = (user) => {
  return jwt.sign(user, config.auth.jwt.secret, {
    expiresIn: 10080
  });
}

const setUserInfo = (request) => {
  return {
    _id: request._id,
    email: request.email,
    role: request.role,
  };
}


export function login(req, res, next) {
  console.log(req.user);
  if (!req.user.email) {
    console.log('hello')
    res.send({ message: req.authInfo.message });
  } else {
    const userInfo = setUserInfo(req.user);
    res.status(200).json({
      token: `${generateToken(userInfo)}`,
      user: userInfo
    });
  }
};

//========================================
// Registration Route
//========================================
export function register(req, res, next) {
  // Check for registration errors
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const username = req.body.username;

  if (confirmPassword != password) {
    return res.send({ message: 'Your passwords must match' });
  }

  User.findOne({ email: email }, (err, existingUser) => {
      if (err) { return next(err); }

      // If user is not unique, return error
      if (existingUser) {
        return res.send({ message: 'This email is being used' });
      }

      User.findOne({ username: username }, (err, existingUser) => {
        if (existingUser) {
          return res.send({ message: 'This username already exists'});
        }


        // If email and username are unique, create account
        let user = new User({
          email: email,
          password: password,
          username: username
        });

        user.save((err, user) => {
          if (err) { return next(err); }

          // Respond with JWT if user was created

          let userInfo = setUserInfo(user);

          res.status(201).json({
            token: generateToken(userInfo),
            user: userInfo
          });
        });

      });
  });
}

//========================================
// Authorization Middleware
//========================================

// Role authorization check
export function roleAuthorization(role) {  
  return function(req, res, next) {
    const user = req.user;

    User.findById(user._id, function(err, foundUser) {
      if (err) {
        res.send({ error: 'No user was found.' });
        return next(err);
      }

      // If user is found, check role.
      if (foundUser.role == role) {
        return next();
      }

      res.send({ error: 'You are not authorized to view this content.' });
      return next('Unauthorized');
    })
  }
}