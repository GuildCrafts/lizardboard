const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const WidgetSchema = new Schema({})

const Widget = mongoose.model( 'Widget', WidgetSchema )

module.exports = Widget
