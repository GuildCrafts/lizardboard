const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
const bcrypt = require( 'bcrypt-nodejs' )

const UserSchema = new Schema({
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   token: { type: String },
   token_expires: { type: Date },
   created_at: Date,
   updated_at: Date
})

UserSchema.pre( 'save', function( next ) {
  const user = this
  const SALT_FACTOR = 5

  if( !user.isModified( 'password' )) {
    return next()
  }

  bcrypt.genSalt( SALT_FACTOR, ( err, salt ) => {
    if( err ){
      return next( err )
    }

    bcrypt.hash( user.password, salt, null, ( err, hash ) => {
      if( err ){
        return next( err )
      }
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function( candidatePassword, cb ) {
  bcrypt.compare( candidatePassword, this.password, ( error, isMatch ) => {
    if( error ){
      return cb( error )
    }

    cb( null, isMatch )
  })
}

module.exports = mongoose.model('User', UserSchema)
