const schemas = require('mongoose')
const WidgetSchema = require('./WidgetSchema')

const DashboardSchema = schemas.Schema ({
  _user: {type: Number, ref: 'User'},
  widgets: [{type:schemas.Schema.Types.ObjectId, ref:'Widget'}]
})

const Dashboard = schemas.model('Dashboard', DashboardSchema)

module.exports = { DashboardSchema }
