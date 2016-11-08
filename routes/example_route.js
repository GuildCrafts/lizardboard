var express = require('express');

var app = new express();

// Just to test our server is working
app.get('/api', function(req, res) {
  res.json({
    version: '1.0.0',
    title: 'title'
  });
});

app.post('/api/register', function(req, res) {
  // req.checkBody({
  //   name: {
  //     isAlpha: true,
  //     isLength: {
  //       options: [{ min: 2, max: 50 }],
  //       errorMessage: 'Name must be between 2 and 50 characters.'
  //     },
  //     errorMessage: 'Name must have only alphabetical characters.'
  //   }
  // });
  //
  // var errors = req.validationErrors();
  //
  // if (errors) {
  //   return res.status(400).json({
  //     errors: errors
  //   });
  // }
  var hi = req.body;
  // var userIndex = users.push(req.body) - 1;
  var view = 'JoshMatz';
  res.json({name: view});
});

// app.post('/api/login', function(req, res) {
//   req.checkBody({
//     userID: {
//       isNumeric: true,
//       isExistingUser: {
//         errorMessage: 'That user does not exist.'
//       },
//       errorMessage: 'Authentication requires a number.'
//     }
//   });
//
//   var errors = req.validationErrors();
//
//   if (errors) {
//     return res.status(400).json({
//       errors: errors
//     });
//   }
//
//   res.json(users[req.body.userID]);
// });
//
module.exports = app;
