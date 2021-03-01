import request from 'supertest';
import * as faker from 'faker';
import app from '../../../../../app';
import * as url from '../../../utils/urls';
import { HTTP_CREATED } from '../../../utils/status-codes/http-status-codes';

describe('questions /question', () => {
  let token = '';
  let questionId: '';
  beforeAll(async () => {
    const data = {
      email: faker.internet.email(),
      password: faker.random.word(),
    };
    const res = await request(app).post(`${url.AUTH_URL}/register`).send(data);
    expect(res.status).toEqual(HTTP_CREATED);
    token = res.body.data.token;
  });
  beforeAll(async () => {
    const res = await request(app)
      .post(`${url.QUESTIONS_URL}`)
      .send({ title: faker.lorem.sentences(1), body: faker.lorem.paragraph(3) })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(HTTP_CREATED);
    questionId = res.body.data.question.id;
  });
  it('should create a subscription', (done) => {
    request(app)
      .post(`${url.SUBSCRIPTION_URL}/question/${questionId}`)
      .set('X-Auth-Token', token)
      .end((res) => {
        console.log(res);
        expect(res.status).toEqual(HTTP_CREATED);
        expect(res.body.message).toEqual('User Subscribed');
        expect(res.body.status).toEqual(true);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('subscribed');
        done();

      });
  });
});
