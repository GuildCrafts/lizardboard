const User = require('../../../models/users.js')

const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
  User.find().exec()
    .then( user => response.json( user ) )
    .catch( error => next( error ) )
})

router.post('/', (request, response, next) => {
  User.create( request.body )
    .then( user => response.json( user ) )
    .catch( error => next( error ) )
})

router.get('/:id', (request, response, next) => {
  User.findById( request.params.id ).exec()
    .then( user => response.json( user ) )
    .catch( error => next( error ) )
})

router.put('/:id', (request, response, next) => {
  User.findByIdAndUpdate( request.params.id, request.body ).exec()
    .then( user => response.json( user ) )
    .catch( error => next( error ) )
})

router.delete('/:id',(request, response, next) => {
  User.findByIdAndRemove( request.params.id ).exec()
    .then( user => response.json( user ) )
    .catch( error => next( error ) )
})

module.exports = router
