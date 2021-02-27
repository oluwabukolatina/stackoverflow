import request from 'supertest';
import faker from 'faker';
import app from '../src/app';
import {
  HTTP_CREATED,
  HTTP_OK,
} from '../src/lib/utils/status-codes/http-status-codes';
import { AUTH_URL, QUESTIONS_URL } from '../src/lib/utils/urls';

describe('questions /question', () => {
  let token: any = null;
  beforeAll(async () => {
    const data = {
      email: faker.internet.email(),
      password: faker.random.word(),
    };
    const res = await request(app).post(`${AUTH_URL}/login`).send(data)
    expect(res.status).toEqual(HTTP_OK);
    token = res.body.data.token;
  });
  it('should create a question', async () => {
    const res = await request(app)
      .post(`${QUESTIONS_URL}`)
      .send({ title: faker.lorem.word(6), body: faker.lorem.paragraph(3) })
      .expect(HTTP_CREATED)
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(HTTP_CREATED);
    expect(res.body.message).toEqual('Created Question');
    expect(res.body.status).toEqual(true);
    expect(res.body.should.have.property('data'));
  });
});
