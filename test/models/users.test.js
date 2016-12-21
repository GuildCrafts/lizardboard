const expect = require( 'chai' ).expect

const User = require( '../../models/users' );

describe( 'The users model ', () => {
  it( 'should return an error if email is empty',
    () => {

    let user = new User()

    user.validate( () => {
      expect( err.errors.email ).to.exist
      done()
    })
  })
})
