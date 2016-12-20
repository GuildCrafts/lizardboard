const Dashboard = require( '../../../models/dashboards' )
const { Widget } = require( '../../../models/widgets' )
const addWidget = require( './dashboard/addWidget' )
const errorResponse = require( '../src/errorResponse')

const express = require( 'express' )
const router = express.Router()

router.get( '/', ( request, response ) => {
  Dashboard.find().exec()
    .then( dashboard => response.json( dashboard ))
    .catch( errorResponse( response ))
})

router.post( '/', ( request, response ) => {
  Dashboard.create( request.body )
    .then( dashboard => response.status( 201 ).json( dashboard ))
    .catch( errorResponse( response ))
})

router.get( '/:id', ( request, response ) => {
  Dashboard.findById( request.params.id ).exec()
    .then( dashboard => response.json( dashboard ))
    .catch( errorResponse( response ))
})

router.put( '/:id', ( request, response ) => {
  Dashboard.findByIdAndUpdate( request.params.id, request.body ).exec()
    .then( dashboard => response.json( dashboard ))
    .catch( errorResponse( response ))
})

router.delete( '/:id',( request, response ) => {
  Dashboard.findByIdAndRemove( request.params.id ).exec()
    .then( dashboard => response.status( 204 ).send())
    .catch( errorResponse( response ))
})

router.post( '/:id/widgets', ( request, response ) => {
  Dashboard.findById( request.params.id ).exec()
    .then( addWidget( request.body ))
    .then( dashboard => response.status( 201 ).json( dashboard ))
    .catch( errorResponse( response ))
})

module.exports = router
