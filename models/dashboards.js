const mongoose = require('mongoose')
const { Schema } = mongoose
const User = require('./users.js')
// const Widget = require('./widgets.js')


const WidgetSchema = new Schema ({
  type: String,
  title: String,
  size: String,
  contents: String
})

const Widget = mongoose.model( 'Widget', WidgetSchema )

const DashboardSchema = new Schema ({
  name: { type: String, required: true, default: 'Company Dashboard' },
  location: { type: String, required: true, default: 'Oakland' },
  width: { type: Number, required: true, default: 2 },
  theme: { type: String, required: true, default: 'Dark' },
  responsive: { type: Boolean, required: true, default: true },
  created_at: { type: Date, required: true, default: Date.now },
  users: [{ type: Schema.Types.ObjectId, ref:'User' }],
  widgets: [ WidgetSchema ]
})


const Dashboard = mongoose.model('Dashboard', DashboardSchema)

module.exports = { Dashboard, Widget }

// widgets: [Widget],
