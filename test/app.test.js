const request  = require('supertest');

const app = require('../src/app');

it('Deve responder na raiz', async () => {
  const response = await request(app).get('/').send();
  expect(response.status).toBe(200);
});

