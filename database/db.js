const db = 'mongodb://localhost/lizardboard'
const url = 'mongodb://127.0.0.1:27017/lizardboard';
const MongoClient = require('mongodb').MongoClient, assert = require('assert');

MongoClient.connect(url, (err, res, db) => {
    res.render('error', {
    message: err.message,
    error: err
});