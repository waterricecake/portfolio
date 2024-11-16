import { setTest, clearTest } from '#root/test/common/setTest.js';
import request from 'supertest';
import { app, stopServer } from '#src/main.js';

beforeAll(async () => {
  await setTest();
});
describe('Settings Integration test', () => {
  test('GET /settings/:userId', async () => {
    const response = await request(app).get('/settings/1');
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});

afterAll(async () => {
  await stopServer();
  await clearTest();
});
