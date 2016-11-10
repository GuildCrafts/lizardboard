const Widget = require('../../../models/widgets.js')
const User = require('../../../models/users.js')

const express = require('express')
const router = express.Router()

router.get('/widgets', ())

// get all widgets
router.get('/', (request, response, next) => {
  Widget.find((error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

router.get('/widgets/:widgetId', ( request, response, next ) => {
  const { widgetId } = request.params

  User.find( {'widgets._id': widgetId},function(error, widgets){
    return widgets
  })
  .then( data => console.log('finished') )
})

router.post('/dashboards/:id/widgets', (request, response, next ) => {
  Widget.create(request.body, (error, post) => {
    if ( error ) return next ( error )
    response.json( post )
  })
})

// Update widget
router.put('/:userId/widgets/:widgetId', ( request, response, next ) => {
  const { dashboardId, widgetId } = request.params
  const { type, title, size, contents } = request.body

  const updatedAttributes = {
    _id: widgetId,
    type: type,
    title: title,
    size: size,
    contents: contents
  }

  User.findOneAndUpdate(
    { _id: userId, widgets: { $elemMatch:{ _id: widgetId }}},
    {
      $set: {
        'widgets.$': updatedAttributes
      }
     },
    ( error ) => {
      if( error ) console.log( error )
    }
  )
})

// Delete one widget within a Dashboard
router.delete( '/:id', ( request, response, next ) => {
  const { userId, widgetId } = request.params

  User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        widgets: { _id:  widgetId }
      }
    },
    {'new': true},
    ( error, data ) => {
      if( error ) console.log( error )
    }
  )
})

module.exports = router
