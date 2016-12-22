const chai = require( 'chai' )
const request = require( 'supertest' )
const app = require( 'express' ).Router
const expect = chai.expect

describe( 'Dashboard Server Request', () => {
  it( 'GET homepage', () => {
    request( app )
      .get( '/api/dashboards' )
      .expect( 200, "ok" )
      .expect( 'Content-Type', /json/ )
      .end( ( error, response ) => {
        if( error ) throw error
      })
  })
})
