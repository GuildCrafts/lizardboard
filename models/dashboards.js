const mongoose = require('mongoose')
const { Schema } = mongoose
const User = require('./users.js')
const { DashboardWidgetSchema } = require('./dashboardwidgets.js')

const DashboardSchema = new Schema ({
  name: { type: String, required: true, default: 'Company Dashboard' },
  location: { type: String, required: true, default: 'Oakland' },
  width: { type: Number, required: true, default: 2 },
  theme: { type: String, required: true, default: 'Dark' },
  responsive: { type: Boolean, required: true, default: true },
  created_at: { type: Date, required: true, default: Date.now },
  users: [{ type: Schema.Types.ObjectId, ref:'User' }],
  dashboard_widgets: [ DashboardWidgetSchema ]
})


const Dashboard = mongoose.model('Dashboard', DashboardSchema)

module.exports = Dashboard
