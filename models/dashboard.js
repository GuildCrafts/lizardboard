// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dashboardSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: String,
  width: Number,
  theme: String,
  responsive: Boolean,
});

// the schema is useless so far
// we need to create a model using it
var Dashboard = mongoose.model('dashboard', dashboardSchema);

// make this available to our users in our Node applications
module.exports = Dashboard;

// var ObjectId = Schema.ObjectId;
// user_id: ObjectId,
