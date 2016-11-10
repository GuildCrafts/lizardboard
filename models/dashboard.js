const mongoose = require('mongoose')
const { Schema } = mongoose

const DashboardSchema = mongoose.Schema ({
  user: {type: Number, ref: 'User'},
  widgets: [{type: Schema.Types.ObjectId, ref:'Widget'}]
})

const Dashboard = mongoose.model('Dashboard', DashboardSchema)

module.exports = Dashboard
