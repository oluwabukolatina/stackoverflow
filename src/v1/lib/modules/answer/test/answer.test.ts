import request from 'supertest';
import faker from 'faker';
import app from '../../../../../app';
import * as url from '../../../utils/urls';
import * as statusCode from '../../../utils/status-codes/http-status-codes';

describe('answer /answer', () => {
  let token = '';
  let questionId: '';
  let answerId: '';
  beforeAll(async () => {
    const data = {
      email: faker.internet.email(),
      password: 'password',
    };
    const res = await request(app).post(`${url.AUTH_URL}/register`).send(data);
    expect(res.status).toEqual(statusCode.HTTP_CREATED);
    token = res.body.data.token;
  });
  beforeAll(async () => {
    const res = await request(app)
      .post(`${url.QUESTIONS_URL}`)
      .send({ title: faker.lorem.sentences(1), body: faker.lorem.paragraph(3) })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCode.HTTP_CREATED);
    questionId = res.body.data.question.id;
  });
  beforeAll(async () => {
    const res = await request(app)
      .post(`${url.ANSWER_URL}/${questionId}`)
      .send({ answer: faker.lorem.paragraph(3), questionId, userId: 1 })
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCode.HTTP_CREATED);
  });

  it('should  answer a question', (done) => {
    const data = { answer: faker.lorem.paragraph(3), questionId };
    request(app)
      .post(`${url.ANSWER_URL}/${questionId}`)
      .send(data)
      .set('X-Auth-Token', token)
      .end((err, res) => {
        expect(res.status).toEqual(statusCode.HTTP_CREATED);
        expect(res.body.message).toEqual('Question Answered');
        expect(res.body.status).toEqual(true);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('answered');
        done();
      });
  });

  it('should not create an answer if field not filled', async () => {
    const res = await request(app)
      .post(`${url.ANSWER_URL}/${questionId}`)
      .set('X-Auth-Token', token)
      .send({
        field: faker.random.word(),
      });
    expect(res.status).toEqual(statusCode.HTTP_BAD_REQUEST);
    expect(res.body.message).toEqual('Unable to Answer Question');
    expect(res.body.status).toEqual(false);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error[0].message).toEqual('answer is required');
  });
  it('should not answer a question that does not exist', async () => {
    const res = await request(app)
      .post(`${url.ANSWER_URL}/9000000`)
      .set('X-Auth-Token', token)
      .send({
        answer: faker.random.word(),
      });
    expect(res.status).toEqual(statusCode.HTTP_NOT_FOUND);
    expect(res.body.message).toEqual('Question Not Found');
    expect(res.body.status).toEqual(false);
  });

  it('should upvote an answer', async () => {
    const res = await request(app)
      .put(`${url.ANSWER_URL}/upvote/${answerId}`)
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCode.HTTP_OK);
    expect(res.body.message).toEqual('Upvoted Answer');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('updated');
  });
  it('should downvote an answer', async () => {
    const res = await request(app)
      .put(`${url.ANSWER_URL}/downvote/${answerId}`)
      .set('X-Auth-Token', token);
    expect(res.status).toEqual(statusCode.HTTP_OK);
    expect(res.body.message).toEqual('Downvoted Answer');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('updated');
  });
});
