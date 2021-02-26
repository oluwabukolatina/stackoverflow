import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';

import 'chai/register-should';

const QUESTIONS_URL = '/api/v1/korapay/question';
describe('questions /question', () => {
  it('should create a question', () => {
    request(app)
      .post(`${QUESTIONS_URL}`)
      .send({ title: 'dummy question', body: 'dummy body' })
      .expect(201)
      .end((err: Error, res) => {
        expect(res.status).to.eql(201);
        expect(res.body.message).to.eql('Created Question');
        expect(res.body.status).to.eql(true);
        expect(res.body.should.have.property('data'));
      });
  });
});
