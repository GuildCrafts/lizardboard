const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user.js')
const { sendWelcomeEmail } = require('../server/mailer/welcomeemail.js')

router.post( '/', (request, response, next ) => {
  User.create( request.body )
  .then( user =>  {
    sendWelcomeEmail( user )
    response.json( user )
  })
  .catch( error => next( error) )
})

module.exports = router
