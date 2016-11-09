const schemas = require('mongoose')
schemas.connect('mongodb://localhost/lizardboard')
const db= schemas.connection
const UserSchema = require('./UserSchema')
db.on('error', console.error.bind(console,'connection error:'))
db.once('open', function() {
  console.log('connected')
})

const User = schemas.model('User', UserSchema)

module.exports = {
  db,
  User
}
