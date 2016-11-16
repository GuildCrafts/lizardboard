const jwt = require( 'jsonwebtoken' )
const crypto = require( 'crypto' )
const User = require( '../../models/users' )

const generateToken = user => {
  return jwt.sign( user, 'super secret passphrase', {
    expiresIn: 10080
  })
}

const userInfo = user => ({
  email: user.email,
  _id: user._id
})

const tokenInfo = user => {
  const info = userInfo( user )

  return {
    token: `JWT ${generateToken( info )}`,
    user: info
  }
}

exports.register = ( request, response, next ) => {
  const email = request.body.email
  const password = request.body.password

  if (!email) {
    return response.status(422).send({ error: 'You must enter an email address.' })
  }

  User.findOne({ email: email }, (err, existingUser) => {
      if (err) { return next(err) }

      if (existingUser) {
        return response.status(422).send({ error: 'That email address is already in use.' })
      }

      const user = new User({ email, password })

      user.save( ( err, user ) => {
        if( err ) {
          return next( err )
        }

        return response.status(201).json( tokenInfo( user ))
      })
  })
}