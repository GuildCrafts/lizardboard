// if our user.js file is at models/user.js
var mongoose = require('mongoose');
var User = require('../models/user');
mongoose.connect('mongodb://localhost/lizardboard');
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password'
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

mongoose.connection.close();
