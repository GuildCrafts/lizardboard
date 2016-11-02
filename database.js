const DATABSE_URL = 'mongodb://127.0.0.1:27017/lizardboard';
const MongoClient = require('mongodb').MongoClient, assert = require('assert');

MongoClient.connect(DATABASE_URL, (err, response) => {
  .then( DATABASE_URL => {
    response.send('Successfully connected to the database')
  })
  .catch( error => {
    response.render('error', { error: error })
  });
});
