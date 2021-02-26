import request from 'supertest';
import { expect } from 'chai';
import * as faker from 'faker';
import app from '../src/app';
import 'chai/register-should';
import { HTTP_CREATED } from '../src/lib/utils/status-codes/http-status-codes';
import { AUTH_URL } from '../src/lib/utils/urls';

describe('questions /question', () => {
  it('should create a question', () => {
    request(app)
      .post(`${AUTH_URL}/register`)
      .send({
        email: faker.internet.email(),
        password: faker.random.word(),
      })
      .expect(HTTP_CREATED)
      .end((err: Error, res) => {
        expect(res.status).to.eql(201);
        expect(res.body.message).to.eql('User Created');
        expect(res.body.status).to.eql(true);
        expect(res.body.should.have.property('data'));

      });
  });
});
