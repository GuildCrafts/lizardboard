const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: String,
  width: Number,
  theme: String,
  responsive: Boolean,
});

const Dashboard = mongoose.model('dashboard', dashboardSchema);

module.exports = Dashboard;
