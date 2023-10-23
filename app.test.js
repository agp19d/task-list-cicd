// app.test.js

const request = require('supertest');
const app = require('./app'); // Make sure this path points to your app file; adjust if necessary.

describe('GET /', () => {
  it('responds with the index.html file', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);

    // Here you should check the actual content of the HTML if needed
    // For example, you can check if the response text includes specific content
    // expect(response.text).toContain('<title>Task List</title>');
    // But we're not expecting 'tasks' property here as it's not a JSON response.
  });
});

describe('POST /add-task', () => {
  it('responds with success message', async () => {
    const response = await request(app)
      .post('/add-task')
      .send({ task: 'New Task' }) // Make sure this matches the structure your API expects
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toBe('Task added successfully');
  });
});
