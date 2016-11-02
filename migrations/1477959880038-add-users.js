'use strict';
const mongoose = require('mongoose');

/**
 * Make any changes you need to make to the database here
 */

exports.up = function up (done) {
    const add_users = new mongoose.Schema({
      _id: {seq: 0},
      name: {
        first: String,
        last: { type: String, trim: true }
      },
      email: {String}
    });
  done();
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
