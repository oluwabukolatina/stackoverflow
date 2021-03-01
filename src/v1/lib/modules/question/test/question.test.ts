import request from 'supertest';
import faker from 'faker';
import app from '../../../../../app';
import * as url from '../../../utils/urls';
import * as statusCodes from '../../../utils/status-codes/http-status-codes';

describe('questions /question', () => {
  let token = '';
  let questionId: '';
  beforeAll(async () => {
    const data = {
      email: faker.internet.email(),
      password: faker.random.word(),
    };
    const res = await request(app).post(`${url.AUTH_URL}/register`).send(data);
    expect(res.status).toEqual(statusCodes.HTTP_CREATED);
    token = res.body.data.token;
  });
  beforeAll(async () => {
    const res = await request(app)
      .post(`${url.QUESTIONS_URL}`)
      .send({ title: faker.lorem.sentences(1), body: faker.lorem.paragraph(3) })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCodes.HTTP_CREATED);
    questionId = res.body.data.question.id;
  });
  it('should create a question', async () => {
    const res = await request(app)
      .post(`${url.QUESTIONS_URL}`)
      .send({ title: faker.lorem.sentences(1), body: faker.lorem.paragraph(3) })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCodes.HTTP_CREATED);
    expect(res.body.message).toEqual('Created Question');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('question');
  });
  it('should get all questions', async () => {
    const res = await request(app).get(`${url.QUESTIONS_URL}`);
    expect(res.status).toEqual(statusCodes.HTTP_OK);
    expect(res.body.message).toEqual('Fetched Questions');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('questions');
  });
  it('should upvote a question', async () => {
    const res = await request(app)
      .put(`${url.QUESTIONS_URL}/upvote/${questionId}`)
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCodes.HTTP_OK);
    expect(res.body.message).toEqual('Upvoted Question');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('updated');
  });
  it('should downvote a question', async () => {
    const res = await request(app)
      .put(`${url.QUESTIONS_URL}/downvote/${questionId}`)
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCodes.HTTP_OK);
    expect(res.body.message).toEqual('Downvoted Question');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('updated');
  });
});
