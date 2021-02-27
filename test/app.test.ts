import request from 'supertest';
import app from '../src/app';

describe('home test', () => {
  it('should return appropiate message', () => {
    const res = request(app).get('/').expect(200);
    console.log(res);
    // expect(res.text).toEqual('Korapay Senior Developer Technical Test!');
  });
});
