const Dashboard = require('../../../models/dashboards.js')
const { DashboardWidget } = require('../../../models/dashboardwidgets.js')

const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
  Dashboard.find().exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.post('/', (request, response, next) => {
  Dashboard.create( request.body )
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.get('/:id', (request, response, next) => {
  Dashboard.findById( request.params.id ).exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.put('/:id', (request, response, next) => {
  Dashboard.findByIdAndUpdate( request.params.id, request.body ).exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.delete('/:id',(request, response, next) => {
  Dashboard.findByIdAndRemove( request.params.id ).exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

// get all widgets by dashboard_id
// GET dashboards/:id/widgets/

// router.get('/:id/widgets/', (request, response, next) => {
//   const findAllWidgets = widgetData => dashboard => {
//     return dashboard.widgets.find().exec()
//   }
//   Widget.find({}, 'widgets'
//   Dashboard.findById( request.params.id ).exec()
//     .then( ).exec())
//     .then( dashboard => response.json( dashboard ) )
//     .catch( error => next( error ) )
// })

router.post('/:id/dashboardwidgets', (request, response, next) => {
  const addDashboardWidget = dashboardWidgetData => dashboard => {
    dashboard.dashboard_widgets.push( new DashboardWidget( dashboardWidgetData ) )
    return dashboard.save()
  }

  Dashboard.findById( request.params.id ).exec()
    .then( addDashboardWidget( request.body ))
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

// update widget by dashboard_id and widget_id
// PUT dashboards/:id/widgets/:id

// delete widget by dashboard_id and widget_id
// DELETE dashboards/:id/widgets/:id

module.exports = router
