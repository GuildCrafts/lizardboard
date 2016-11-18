const User = require( '../../../models/users' )
const errorResponse = require( '../src/errorResponse')

const express = require( 'express' )
const router = express.Router()
const passport = require( '../../../config/passport' )

const { register } = require( '../../../src/authentication/register' )
const { login } = require( '../../../src/authentication/login' )

const requireAuth = passport.authenticate( 'jwt', { session: false } )
const requireLogin = passport.authenticate( 'local', {
  session: false,
  failureRedirect: '/',
  failureFlash: true
})

router.get( '/', ( request, response ) => {
  User.find().exec()
    .then( user => response.json( user ))
    .catch( errorResponse( response ))
})

router.post( '/', (request, response ) => {
  User.create( request.body )
    .then( user => response.status( 201 ).json( user ))
    .catch( errorResponse( response ))
})

router.get( '/logout', ( request, response ) => {
  request.logout()
  response.send( 200 )
})

router.get( '/:id', ( request, response ) => {
  User.findById( request.params.id ).exec()
    .then( user => response.json( user ))
    .catch( errorResponse( response ))
})

router.put( '/:id', ( request, response ) => {
  User.findByIdAndUpdate( request.params.id, request.body ).exec()
    .then( user => response.json( user ))
    .catch( errorResponse( response ))
})

router.delete( '/:id', ( request, response ) => {
  User.findByIdAndRemove( request.params.id ).exec()
    .then( user => response.status( 204 ).send())
    .catch( errorResponse( response ))
})

router.post( '/register', register )

router.post( '/login', requireLogin, login )

module.exports = router
