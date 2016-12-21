const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const WidgetSpecificationSchema = new Schema({})

const WidgetSpecification = mongoose.model( 'WidgetSpecification', WidgetSpecificationSchema )

module.exports = WidgetSpecification
