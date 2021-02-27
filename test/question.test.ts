import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';
import 'chai/register-should';
import { HTTP_CREATED } from '../src/lib/utils/status-codes/http-status-codes';
import { QUESTIONS_URL } from '../src/lib/utils/urls';

describe('questions /question', () => {
  // it('should create a question', () => {
  //   request(app)
  //     .post(`${QUESTIONS_URL}`)
  //     .send({ title: 'dummy question', body: 'dummy body' })
  //     .expect(HTTP_CREATED)
  //     .end((err: Error, res) => {
  //       expect(res.status).to.eql(HTTP_CREATED);
  //       expect(res.body.message).to.eql('Created Question');
  //       expect(res.body.status).to.eql(true);
  //       expect(res.body.should.have.property('data'));
  //     });
  // });
});
