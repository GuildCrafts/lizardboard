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

router.get('/', (request, response, next) => {
  response.render('dashboard', { title: 'Dashboard', logo: 'H&J' });
});

router.post('/', (request, response, next) => {
  Dashboard.create(request.body, (error, post) => {
    if (error)
      return next(error);
    response.json(post);
  });
});

// const buildFilteredItemTree = require( '../../items/build_filtered_item_tree' )
//
// router.get( '/', ( request, response ) => {
//   const { Item } = request.app.get( 'models' )
//   const { query, decoded } = request
//
//   buildFilteredItemTree( Item, decoded.user, query )
//     .then( data => response.json( { data } ) )
// })
//
// router.post( '/', ( request, response ) => {
//   const { Item } = request.app.get( 'models' )
//
//   const { title, description, parent_id } = request.body
//   const { user } = request.decoded
//
//   Item.create({ title, description, parent_id, user_id: user.id })
//     .then( result => response.status( 200 ).json( {} ) )
// })

module.exports = router;
