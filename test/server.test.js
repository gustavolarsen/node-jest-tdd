const supertest = require('supertest');

const request = supertest('http://localhost:3000');

test('Deve responder na porta 3000', async () => {  
  const response = await request.get('/').send();
  expect(response.status).toBe(200);
}); 
