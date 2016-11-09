const mongoose = require('mongoose');
const Dashboard = require('../models/dashboard.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/lizardboard')
  .then(() => console.log('connection succesful'))
  .catch((error) => console.error(err));

const express = require('express');
const router = express.Router();

router.post('/', (request, response, next) => {
  Dashboard.create(request.body, (error, post) => {
    if (error)
      return next(error);
    response.json(post);
  });
});

router.get('/:id', (request, response, next) => {
  Dashboard.findById(request.params.id, (error, post) => {
    if (error) return next(error);
    response.json(post);
  });
});

module.exports = router;
