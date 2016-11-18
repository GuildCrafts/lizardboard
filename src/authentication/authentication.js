const jwt = require( 'jsonwebtoken' )
const crypto = require( 'crypto' )
const User = require( '../../models/users' )

const generateToken = user => {
  return jwt.sign( user, process.env.SECRET , {
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

module.exports = { generateToken, userInfo, tokenInfo }