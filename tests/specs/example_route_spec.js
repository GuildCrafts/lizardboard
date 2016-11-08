var app = require('../../routes/example_route');
var request = require('supertest');

describe('API Tests', function() {
  it('should return version number', function(done) {
    request(app)
      .get('/api')
      .end(function(err, res) {
        expect(res.body.version).toEqual('1.0.0');
        expect(res.body.title).toEqual('title');
        expect(res.statusCode).toEqual(200);
        done();
      });
  });
});

describe('Registration Tests', function() {
    it('should return the user if the name is valid', function(done) {
      request(app)
      .post('/api/register')
      .send({name: 'JoshMatz'})
      .end(function(err, res) {
        expect(res.body.name).toEqual('JoshMatz');
        expect(res.statusCode).toEqual(200);
        done();
      });
    });
  });

// describe('Login Tests', function() {
//   it('should return the user if valid', function(done) {
//     request(app)
//     .post('/api/login')
//     .send({userID: 0})
//     .end(function(err, res) {
//       expect(res.body.name).toEqual('JoshMatz');
//       expect(res.statusCode).toEqual(200);
//       done();
//     });
//   });
// });
