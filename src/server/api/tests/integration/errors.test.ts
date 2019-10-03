import request from 'supertest';
import app from '../../../index';


describe('Errors', () => {
  // it('should return html instead 404', () => request(app)
  //   .get('/not/valid')
  //   .expect('Content-Type', /text\/html/));

  it('should return 404 in invalid api url', () => request(app)
    .get('/api/not/valid')
    .expect(404));
});
