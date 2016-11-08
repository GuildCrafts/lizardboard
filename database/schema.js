const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/lizardboard')
const db= mongoose.connection
db.on('error', console.error.bind(console,'connection error:'))
db.once('open', function() {
  console.log('connected')
})


const widgetSchema = mongoose.Schema ({
  type: String, title: String, size: String, contents: String
})
const userSchema = mongoose.Schema ({
  username: String,
  widgets: [ widgetSchema ]
})
const userWidgets = mongoose.model('userWidgets', userSchema)

module.exports = {
  db,
  userWidgets
}
