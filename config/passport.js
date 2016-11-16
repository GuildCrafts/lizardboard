const passport = require( 'passport' )
const User = require( '../models/users' )
const JwtStrategy = require( 'passport-jwt' ).Strategy
const ExtractJwt = require( 'passport-jwt' ).ExtractJwt
const LocalStrategy = require( 'passport-local' )

const localOptions = {
  usernameField: 'email'
}

const ERROR_MESSAGE = {
  error: 'Your login details could not be verified. Please try again.'
}

const strategy = ( email, password, done ) => {

  User.findOne({ email }, ( error, user ) => {
    if( error ) {
      return done( error )
    }

    if( ! user ) {
      return done( null, false, ERROR_MESSAGE )
    }

    user.comparePassword(password, function( error, isMatch ) {
      if ( error ) { return done(error); }
      if ( !isMatch ) { return done(null, false, ERROR_MESSAGE ); }

      return done( null, user );
    })
  })
}

const localLogin = new LocalStrategy( localOptions, strategy )

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'super secret passphrase'
}

const jwtLogin = new JwtStrategy( jwtOptions, function( payload, done ) {
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