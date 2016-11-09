
const Dashboard = require('../models/dashboards.js')

const express = require('express')
const router = express.Router()

router.post('/', (request, response, next) => {
  Dashboard.create(request.body, (error, post) => {
    if (error) return next(error)
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
  const userId  = request.params.id

  Dashboard.findByIdAndUpdate(userId, request.body, (error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

router.delete('/:id',(request, response, next) => {
  Dashboard.findByIdAndRemove(request.params.id, request.body, (error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

module.exports = router
