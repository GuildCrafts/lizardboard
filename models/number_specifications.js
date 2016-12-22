const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const NumberSpecificationSchema = new Schema({
  title: String,
  size: String,
  csvUrl: String,
  column: String,
  row: String,
  goal: String
})

const NumberSpecification = mongoose.model( 'NumberSpecification', NumberSpecificationSchema )

module.exports = NumberSpecification
