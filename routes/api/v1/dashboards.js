const Dashboard = require('../../../models/dashboards.js')
const { Widget } = require('../../../models/widgets.js')

const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
  Dashboard.find((error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

router.post('/', (request, response, next) => {
  Dashboard.create(request.body, (error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

router.get('/:id', (request, response, next) => {
  Dashboard.findById(request.params.id, (error, post) => {
    if (error) return next(error)
    response.json(post)
  })
})

router.put('/:id', (request, response, next) => {
  const name  = request.params.id

  Dashboard.findByIdAndUpdate(name, request.body, (error, post) => {
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

router.post('/:id/widgets', (request, response, next) => {
  Dashboard.findById(request.params.id, (error, dashboard) => {
    if (error) return next(error)

    let newWidget = new Widget(request.body)

    dashboard.widgets.push(newWidget)

    dashboard.save((error) => {
      if (error) return next(error)
    })
    response.json(dashboard)
  })
})

module.exports = router
