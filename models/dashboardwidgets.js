const mongoose = require('mongoose')
const { Schema } = mongoose

const DashboardWidgetSchema = new Schema ({
  type: String,
  title: String,
  size: String,
  contents: String
})

const DashboardWidget = mongoose.model( 'DasboardWidget', DashboardWidgetSchema )

module.exports = { DashboardWidgetSchema, DashboardWidget }
