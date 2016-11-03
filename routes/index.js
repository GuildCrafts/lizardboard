const express = require('express');
const router = express.Router();
const passport = require('passport');
const Account = require('../models/account');

router.get('/', (request, response, next) => {
  response.render('index', { title: 'Lizardboard' });
});

router.get('/register', (request, response, next) => {
  response.render('register', { });
});

router.post('/register', (request, response, next) => {
  Account.register(new Account({ username : request.body.username }),
    request.body.password, (err, account) => {
      if (err) {
        return response.render('register', { account : account });
       }
       passport.authenticate('local') (request, response, () => {
         response.redirect('/profile');
      });
   });
});

router.get('/login', (request, response, next) => {
  response.render('login', { user : request.user });
});

router.post('/login', passport.authenticate('local'), (request, response, next) => {
  response.redirect('/profile');
});

router.get('/profile', (request, response, next) => {
  response.render('profile', { user : request.user });
});

router.get('/logout', (request, response, next) => {
  request.logout();
  response.redirect('/');
});

module.exports = router;
