const fs = require('fs')

if( fs.existsSync( '.env' ) ) {
  require( 'dotenv' ).config()
} else {
  console.log( ".env not found, skipping dotenv config" )
}
