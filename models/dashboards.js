const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dashboardSchema = new Schema({
  name: { type: String, required: true, default: 'Company Dashboard' },
  location: { type: String, required: true, default: 'Oakland' },
  width: { type: Number, required: true, default: 2 },
  theme: { type: String, required: true, default: 'Dark' },
  responsive: { type: Boolean, required: true, default: true },
  created_at: { type: Date, required: true, default: Date.now },
})

const Dashboard = mongoose.model('Dashboard', dashboardSchema)

module.exports = Dashboard
