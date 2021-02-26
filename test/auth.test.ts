import request from 'supertest';
import { expect } from 'chai';
import * as faker from 'faker';
import app from '../src/app';
import 'chai/register-should';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
} from '../src/lib/utils/status-codes/http-status-codes';
import { AUTH_URL } from '../src/lib/utils/urls';

describe('auth /auth', () => {
  it('should create a user', () => {
    request(app)
      .post(`${AUTH_URL}/register`)
      .send({
        email: faker.internet.email(),
        password: faker.random.word(),
      })
      .expect(HTTP_CREATED)
      .end((err: Error, res) => {
        expect(res.status).to.eql(HTTP_CREATED);
        expect(res.body.message).to.eql('User Created');
        expect(res.body.status).to.eql(true);
        expect(res.body.should.have.property('data'));
      });
  });
  it('should not create a user if no email', () => {
    request(app)
      .post(`${AUTH_URL}/register`)
      .send({
        password: faker.random.word(),
      })
      .expect(HTTP_BAD_REQUEST)
      .end((err: Error, res) => {
        expect(res.status).to.eql(HTTP_BAD_REQUEST);
        expect(res.body.message).to.eql('Unable to register');
        expect(res.body.status).to.eql(false);
        expect(res.body.should.have.property('error'));
        expect(res.body.error[0].message).to.eql('email is required');
      });
  });

  it('should not create a user if no password', () => {
    request(app)
      .post(`${AUTH_URL}/register`)
      .send({
        email: faker.internet.email(),
      })
      .expect(HTTP_BAD_REQUEST)
      .end((err: Error, res) => {
        expect(res.status).to.eql(HTTP_BAD_REQUEST);
        expect(res.body.message).to.eql('Unable to register');
        expect(res.body.status).to.eql(false);
        expect(res.body.should.have.property('error'));
        expect(res.body.error[0].message).to.eql('password is required');
      });
  });
});
