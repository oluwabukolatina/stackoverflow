import request from 'supertest';
import faker from 'faker';
import app from '../src/app';
import {
  HTTP_CREATED,
  HTTP_OK,
} from '../src/lib/utils/status-codes/http-status-codes';
import { AUTH_URL, QUESTIONS_URL } from '../src/lib/utils/urls';

describe('questions /question', () => {
  let token = '';
  let questionId: '';
  beforeAll(async () => {
    const data = {
      email: faker.internet.email(),
      password: faker.random.word(),
    };
    const res = await request(app).post(`${AUTH_URL}/register`).send(data);
    expect(res.status).toEqual(HTTP_CREATED);
    token = res.body.data.token;
  });
  beforeAll(async () => {
    const res = await request(app)
      .post(`${QUESTIONS_URL}`)
      .send({ title: faker.lorem.sentences(1), body: faker.lorem.paragraph(3) })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(HTTP_CREATED);
    questionId = res.body.data.question.id;
  });
  it('should create a question', async () => {
    const res = await request(app)
      .post(`${QUESTIONS_URL}`)
      .send({ title: faker.lorem.sentences(1), body: faker.lorem.paragraph(3) })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(HTTP_CREATED);
    expect(res.body.message).toEqual('Created Question');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('question');
  });
  it('should get all questions', async () => {
    const res = await request(app).get(`${QUESTIONS_URL}`);
    console.log(res);
    expect(res.status).toEqual(HTTP_OK);
    expect(res.body.message).toEqual('Fetched Questions');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('questions');
  });
  it('should upvote a question', async () => {
    const res = await request(app)
      .put(`${QUESTIONS_URL}/upvote/${questionId}`)
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(HTTP_OK);
    expect(res.body.message).toEqual('Upvoted Question');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('updated');
  });
  it('should downvote a question', async () => {
    const res = await request(app)
      .put(`${QUESTIONS_URL}/downvote/${questionId}`)
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(HTTP_OK);
    expect(res.body.message).toEqual('Downvoted Question');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('updated');
  });
});
