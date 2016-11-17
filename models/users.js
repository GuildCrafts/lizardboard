const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
  created_at: Date,
  updated_at: Date
})

const User = mongoose.model('User', UserSchema)

module.exports = User
