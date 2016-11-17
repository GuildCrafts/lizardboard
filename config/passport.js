const passport = require( 'passport' )
const User = require( '../models/users' )
<<<<<<< 2d95a088794c38d5dfedd9c4cc4402da8b1447a6
const { Strategy, ExtractJwt } = require( 'passport-jwt' )
=======
const JwtStrategy = require( 'passport-jwt' ).Strategy
const ExtractJwt = require( 'passport-jwt' ).ExtractJwt
>>>>>>> trying to fix merge conflicts
const LocalStrategy = require( 'passport-local' )

const localOptions = {
  usernameField: 'email'
}

const ERROR_MESSAGE = {
  error: 'Your login details could not be verified. Please try again.'
}

const strategy = ( email, password, done ) => {
<<<<<<< 2d95a088794c38d5dfedd9c4cc4402da8b1447a6
=======

>>>>>>> trying to fix merge conflicts
  User.findOne({ email }, ( error, user ) => {
    if( error ) {
      return done( error )
    }

    if( ! user ) {
      return done( null, false, ERROR_MESSAGE )
    }

<<<<<<< 2d95a088794c38d5dfedd9c4cc4402da8b1447a6
    user.comparePassword( password, function( error, isMatch ) {
      if ( error ) {
        return done( error )
      }

      if ( !isMatch ) {
        return done( null, false, ERROR_MESSAGE )
      }

      return done( null, user )
=======
    user.comparePassword(password, function( error, isMatch ) {
      if ( error ) { return done(error); }
      if ( !isMatch ) { return done(null, false, ERROR_MESSAGE ); }

      return done( null, user );
>>>>>>> trying to fix merge conflicts
    })
  })
}

const localLogin = new LocalStrategy( localOptions, strategy )

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
<<<<<<< 2d95a088794c38d5dfedd9c4cc4402da8b1447a6
  secretOrKey: 'super secret'
}

const jwtLogin = new Strategy( jwtOptions, function( payload, done ) {
=======
  secretOrKey: 'super secret passphrase'
}

const jwtLogin = new JwtStrategy( jwtOptions, function( payload, done ) {
>>>>>>> trying to fix merge conflicts
  User.findById(payload._id, function( err, user ) {
    if (err) { return done(err, false) }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

passport.use(jwtLogin)
passport.use(localLogin)

module.exports = passport