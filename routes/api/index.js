const dashboards = require('./v1/dashboards')
const users = require('./v1/users')
const widget_specifications = require('./v1/widget_specifications')

module.exports = {
  v1: { dashboards, users, widget_specifications }
}
