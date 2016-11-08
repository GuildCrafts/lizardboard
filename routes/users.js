const express = require('express');
const { userWidgets, db } = require('../database/schema.js')
const router = express.Router();
const mongoose = require('mongoose')


/* GET users listing. */
router.get('/', ( request, response, next ) => {
  response.send( 'respond with a resource' );
});

/* GET widget */
router.get('/widgets/:widgetId', ( request, response, next ) => {
  const { widgetId } = request.params

  userWidgets.find( {'widgets._id': widgetId},function(error, widgets){
      return widgets
  })
  .then( data => console.log('finished') )
});

/* CREATE widgets */
router.post('/:userId/widgets/create', (request, response, next ) => {
  const { userId } = request.params
  const { type, title, size, contents } = request.body

  const newWidget = {
    type: type,
    title: title,
    size: size,
    contents: contents
  }

  userWidgets.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        widgets: newWidget
      }
    },
    { upsert: true },
    function( error ) {
      if( error ) console.log( error )
    }
  )
})

/* UPDATE widgets */
router.post('/:userId/widgets/:widgetId/update', ( request, response, next ) => {
  const { userId, widgetId } = request.params
  const { type, title, size, contents } = request.body

  const updatedWidget = {
    _id: widgetId,
    type: type,
    title: title,
    size: size,
    contents: contents
  }

  userWidgets.findOneAndUpdate(
    { _id: userId, widgets: { $elemMatch:{ _id: widgetId }}},
    {
      $set: {
        'widgets.$': updatedWidget
      }
     },
    { upsert: true },
    function( error ) {
      if( error ) console.log( error )
    }
  )
})


/* DELETE widgets */
router.post( '/:userId/widgets/:widgetId/delete', ( request, response, next ) => {
  const { userId, widgetId } = request.params

  userWidgets.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        widgets: { _id:  widgetId }
      }
    },
    {'new': true},
    function( error, data ){
      if( error ) console.log( error )
    }
  )
})

module.exports = router;
