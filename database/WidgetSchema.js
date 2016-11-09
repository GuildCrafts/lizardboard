const schemas = require('mongoose')

const WidgetSchema = schemas.Schema ({
  _dashboard:{ type:Number, ref:'Dashboard' },
  type: String,
  title: String,
  size: String,
  contents: String
})

const Widget = schemas.model( 'Widget', WidgetSchema )

module.exports = { WidgetSchema }
