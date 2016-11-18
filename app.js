const express = require( 'express' )
const path = require( 'path' )
const favicon = require( 'serve-favicon' )
const logger = require( 'morgan' )
const cookieParser = require( 'cookie-parser' )
const bodyParser = require( 'body-parser' )

const api = require( './routes/api/manifest' ).v1

const cors = require( './src/cors' )

const app = express()

app.set( 'env', process.env.PORT || '3000' )
if( process.env.NODE_ENV !== 'test' ) app.use( logger( 'dev' ))

app.use( logger( 'dev' ))
app.use( bodyParser.json())
app.use( bodyParser.urlencoded({ extended: false }))
app.use( cookieParser())

app.use( express.static( path.join( __dirname, '../front_end/public' )))

app.use( express.static( path.join( __dirname, 'public' )))

app.use( '/api/v1/dashboards', api.dashboards )
app.use( '/api/v1/users', api.users )

app.use ( cors )

// catch 404 and forward to error handler
app.use( function( req, res, next ) {
  var err = new Error( 'Not Found' )
  err.status = 404
  next( err )
})

// error handlers

// development error handler
// will print stacktrace
if ( app.get( 'env' ) === 'development' ) {
  app.use( function( err, req, res, next ) {
    res.status( err.status || 500 )
    res.send({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use( function( err, req, res, next ) {
  res.status( err.status || 500 )
  res.send({
    message: err.message,
    error: {}
  })
})

module.exports = app
