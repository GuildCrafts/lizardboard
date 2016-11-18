const jwt = require( 'jsonwebtoken' )
const crypto = require( 'crypto' )
const User = require( '../../models/users' )
const { generateToken, userInfo, tokenInfo } = require( './authentication' )

const ERROR_MESSAGE = 'Cannot authenticate request'

exports.register = ( request, response, next ) => {
  const { email, password } = request.body

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

      const user = new User({ email, password })

      user.save(( err, user ) => {
        if( err ) {
          return next( err )
        }

        return response.status( 201 ).json( tokenInfo( user ))
      })
  })
}