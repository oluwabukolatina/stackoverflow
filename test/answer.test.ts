import request from 'supertest';
import faker from 'faker';
import app from '../src/app';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_NOT_FOUND,
} from '../src/lib/utils/status-codes/http-status-codes';
import { ANSWER_URL, AUTH_URL, QUESTIONS_URL } from '../src/lib/utils/urls';

describe('answer /answer', () => {
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
  it('should not create an answer if field not filled', async () => {
    const res = await request(app)
      .post(`${ANSWER_URL}/${Number(questionId)}`)
      .set('X-Auth-Token', token)
      .send({
        field: faker.random.word(),
      });
    expect(res.status).toEqual(HTTP_BAD_REQUEST);
    expect(res.body.message).toEqual('Unable to Answer Question');
    expect(res.body.status).toEqual(false);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error[0].message).toEqual('answer is required');
  });
  it('should not answer a question that does not exist', async () => {
    const res = await request(app)
      .post(`${ANSWER_URL}/9000000`)
      .set('X-Auth-Token', token)
      .send({
        answer: faker.random.word(),
      });
    expect(res.status).toEqual(HTTP_NOT_FOUND);
    expect(res.body.message).toEqual('Question Not Found');
    expect(res.body.status).toEqual(false);
  });
  it('should  answer a question', async () => {
    const res = await request(app)
      .post(`${ANSWER_URL}/${questionId}`)
      .send({ answer: faker.lorem.paragraph(3), questionId })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(HTTP_CREATED);
    expect(res.body.message).toEqual('Question Answered');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('question');
  });
});
