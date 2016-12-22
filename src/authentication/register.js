const jwt = require( 'jsonwebtoken' )
const crypto = require( 'crypto' )
const User = require( '../../models/users' )
const { generateToken, userInfo, tokenInfo } = require( './authentication' )

const ERROR_MESSAGE = 'Cannot authenticate request'

exports.register = ( request, response, next ) => {
  const {
    name, email, password, phone_number, newsletter_subscribed, company
  } = request.body

  if( !email ) {
    return response.status( 422 ).send({ error: ERROR_MESSAGE })
  }

  User.findOne({ email: email }, ( err, existingUser ) => {
      if( err ) {
        return next( err )
      }

      if( existingUser ) {
        return response.status( 422 ).send({ error: ERROR_MESSAGE })
      }

      const user = new User({
        name, email, password, phone_number, newsletter_subscribed, company
      })

      user.save(( err, user ) => {
        if( err ) {
          return next( err )
        }
        response.redirect( process.env.FRONTEND_SERVER + '/dashboard' )
      })
  })
}
