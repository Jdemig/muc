import express from 'express';
const router = express.Router();
import User from './data/models/User';
import { register, login, logout } from './data/controllers/authentication';
import sendEmails from './data/controllers/email.js';
import passportService from './passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });


const REQUIRE_ADMIN = "Admin",
      REQUIRE_MEMBER = "Member",
      REQUIRE_CLIENT = "Client"

import jwt from 'jsonwebtoken';
import config from './config';

const authenticationCheck = (req, res, next) => {
  const token = getToken(req);
  if (token) {
    jwt.verify(token, config.auth.jwt.secret, (err, decoded) => {
      if (err) {
        req.auth = { 
          success: false, 
          message: 'Failed to authenticate token'
        };
        next();
      } else {
        req.auth = { 
          success: true, 
          message: 'JWT Decoded', 
          decoded: decoded 
        };
        next();
      }
    });
  } else {
    req.auth = { 
      success: false, 
      message: 'Failed to authenticate token' 
    };
    next();
  }
}

//=========================
// Email Route
//=========================

//send emails to user as well as site owner
router.post('/send', (req, res, next) => {
  sendEmails(req, res, next);
});

//=========================
// Auth Routes
//=========================

// Registration route
router.post('/register', register);


router.post('/login', requireLogin, login);


router.post('/isauthenticated', (req, res, next) => {
  const token = getToken(req)
  if (token) {
    jwt.verify(token, config.auth.jwt.secret, (err, decoded) => {
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token'});
      } else {
        res.send({ success: true, message: 'JWT Decoded', decoded: decoded });
      }
    });
  } else {
    res.json({ success: false, message: 'Failed to authenticate token' });
  }
});



router.post('/userdata', (req, res, next) => {
  User.findOne({ '_id': req.body.userId }, (err, records) => {
    const augmentedRecords = removePassword(records);
    res.send(augmentedRecords);
  });
});

router.post('/saveuserdata', (req, res, next) => {
  User.findOneAndUpdate({ '_id': req.body.userId }, { 
      'name': req.body.name, 
      'preferences': req.body.preferences, 
      'profilePic': req.body.profilePic,
      'address': req.body.address
    }, (err, records) => {
    User.findOne({ '_id': req.body.userId }, (err, records) => {
      if (records) {
        const augmentedRecords = removePassword(records);
        res.send(augmentedRecords);
      }
    });
  });
});

router.get('/profile', (req, res, next) => { authenticationCheck(req, res, next) }, (req, res, next) => {
  console.log(req.auth);
  if (req.auth.success) {
    next();
  } else {
    res.redirect('/');
  }
}); 


const removePassword = (data) => {
  const temp = { ...data }
  let newData = temp._doc;
  delete newData.password;
  return newData;
}

const augmentHouseData = (data) => {
  const temp = { ...data }
  let newData = temp._doc
  newData.listPriceString = formatListPrice(newData.listPrice);
  return newData
}

const formatListPrice = (listPrice) => {
  const listString = listPrice.toLocaleString();
  return ('$' + listString);
}

const getToken = (req) => {
  let token = null;
  console.log('getToken:' + req.body.token);
  if (req.headers.cookie) {
    req.headers.cookie.split(';').map((possibleToken) => {
      if (possibleToken.slice(0, 5) === 'token') {
        token = possibleToken.slice(6);
      } else if (possibleToken.slice(0, 6) === ' token') {
        token = possibleToken.slice(7);
      }
    });
  }
  return token;
}

export default router;