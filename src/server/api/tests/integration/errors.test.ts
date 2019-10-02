import request from 'supertest';
import app from '../../../index';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';


const mock = new MockAdapter(axios);
const fakeRate = {
  USD: { Value: 70 },
  EUR: { Value: 64 },
};
mock.onGet(/daily_json/).reply(200, {
  Valute: fakeRate,
});

describe('Errors', async () => {
  beforeEach(async () => {

  });

  it('should return html instead 404', () => request(app)
    .get('/not/valid')
    .expect('Content-Type', /text\/html/));
  it('should return 404 in invalid api url', () => request(app)
    .get('/api/not/valid')
    .expect(404));
});
