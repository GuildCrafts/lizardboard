const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const WidgetSchema = new Schema({}, {strict: false})

const Widget = mongoose.model( 'Widget', WidgetSchema )

module.exports = { Widget, WidgetSchema }
