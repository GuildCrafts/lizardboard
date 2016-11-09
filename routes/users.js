const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user.js')

router.post( '/', (request, response, next ) => {
  User.create( request.body )
  .then( user => response.json( user ) )
  .catch( error => next( error) )
})

module.exports = router
