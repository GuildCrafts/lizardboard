const express = require( 'express' )
const router = express.Router()
const errorResponse = require( '../src/errorResponse')
const insertWidgetSpecification = require('./utilities/widget_specification_utilities')

const WidgetSpecification = require( '../../../models/widget_specifications' )

router.get( '/', ( request, response ) => {
  WidgetSpecification.find().exec()
    .then( widget_specifications => response.json( widget_specifications ))
    .catch( errorResponse( response ))
})

router.post( '/', ( request, response ) => {
  insertWidgetSpecification(request.body)
    .then( widget_specification => response.status( 201 ).json( widget_specification ))
    .catch( error => response.status( 400 ).json({}) )
})

router.delete( '/:id', ( request, response ) => {
  WidgetSpecification.findByIdAndRemove( request.params.id ).exec()
    .then( dashboard => response.status( 204 ).send())
    .catch( errorResponse( response ))
})

module.exports = router
