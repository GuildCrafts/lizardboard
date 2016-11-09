
const Dashboard = require('../models/dashboard.js')

const express = require('express')
const router = express.Router()

router.post('/', (request, response, next) => {
  Dashboard.create(request.body, (error, post) => {
    if (error)
      return next(error)
    response.json(post)
  })
})

router.get('/:id', (request, response, next) => {
  Dashboard.findById(request.params.id, (error, post) => {
    if (error) return next(error);
    response.json(post);
  })
})

router.put('/:id', (request, response, next) => {
  Dashboard.findByIdAndUpdate(request.params.id, request.body, (error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

router.delete('/:id',(request, response, next) => {
  console.log(request.params.id);
  Dashboard.findByIdAndRemove(request.params.id, request.body, (error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

module.exports = router
