const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Dashboard = require('../models/dashboard.js');

// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost/lizardboard')
  .then(() => console.log('connection succesful'))
  .catch((error) => console.error(err));

router.get('/:id', (request, response ) => {
  const { id } = request.params
  console.log('id', id);
  response.json(id);
});

router.post('/', (request, response, next) => {
  Dashboard.create(request.body, (error, post) => {
    if (error)
      return next(error);
    response.json(post);
  });
});

module.exports = router;
