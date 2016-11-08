// if our user.js file is at models/user.js
var mongoose = require('mongoose');
var Dashboard = require('../models/dashboard');
mongoose.connect('mongodb://localhost/lizardboard');
// create a new dashboard called chris
var chris = new Dashboard({
  name: 'Dashy',
  location: 'USA',
  width: 4,
  theme: 'Dark',
  responsive: true,
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('Dashboard saved successfully!');
});

mongoose.connection.close();
