const schemas = require('mongoose')
const DashboardSchema = require('./DashboardSchema')

const UserSchema = schemas.Schema ({
  username: String,
  dashboards: [{type: schemas.Schema.Types.ObjectId, ref:'Dashboard'}]
})

module.exports = { UserSchema }
