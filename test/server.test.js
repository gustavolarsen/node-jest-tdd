const supertest = require('supertest');

const request = supertest('http://localhost:3000');

test('Deve responder na porta 3000', () => {

  return request.get('/').then( res=> {
    return expect(res.status).toBe(200);
  }); 
}); 