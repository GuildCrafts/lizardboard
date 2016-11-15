const mongoose = require('mongoose')
const { Schema } = mongoose

const WidgetSchema = new Schema ({
  type: String,
  title: String,
  size: String,
  contents: String
})

const Widget = mongoose.model( 'Widget', WidgetSchema )

module.exports = { WidgetSchema, Widget }
