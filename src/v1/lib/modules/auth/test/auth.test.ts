import request from 'supertest';
import * as faker from 'faker';
import * as statusCode from '../../../utils/status-codes/http-status-codes';
import app from '../../../../../app';
import { AUTH_URL } from '../../../utils/urls';

describe('auth /auth', () => {
  let email = '';
  beforeAll(async () => {
    const data = {
      email: faker.internet.email(),
      password: 'password',
    };
    const res = await request(app).post(`${AUTH_URL}/register`).send(data);
    expect(res.status).toEqual(statusCode.HTTP_CREATED);
    email = res.body.data.user.email;
  });
  it('should create a user', async () => {
    const res = await request(app).post(`${AUTH_URL}/register`).send({
      email: faker.internet.email(),
      password: faker.random.word(),
    });
    expect(res.status).toEqual(statusCode.HTTP_CREATED);
    expect(res.body.message).toEqual('User Created');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
  });
  it('should not create a user if no email', async () => {
    const res = await request(app).post(`${AUTH_URL}/register`).send({
      password: faker.random.word(),
    });
    expect(res.status).toEqual(statusCode.HTTP_BAD_REQUEST);
    expect(res.body.message).toEqual('Unable to register');
    expect(res.body.status).toEqual(false);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error[0].message).toEqual('email is required');
  });
  it('should not create a user if no password', async () => {
    const res = await request(app).post(`${AUTH_URL}/register`).send({
      email: faker.internet.email(),
    });
    expect(res.status).toEqual(statusCode.HTTP_BAD_REQUEST);
    expect(res.body.message).toEqual('Unable to register');
    expect(res.body.status).toEqual(false);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error[0].message).toEqual('password is required');
  });
  it('should not create a user that already exists', async () => {
    const data = {
      email,
      password: 'password',
    };
    const res = await request(app).post(`${AUTH_URL}/register`).send(data);
    expect(res.status).toEqual(statusCode.HTTP_BAD_REQUEST);
    expect(res.body.status).toEqual(false);
    expect(res.body.message).toEqual('Invalid Email/Password');
  });
  it('should login a user', async () => {
    const res = await request(app).post(`${AUTH_URL}/login`).send({
      email,
      password: 'password',
    });
    expect(res.status).toEqual(statusCode.HTTP_OK);
    expect(res.body.message).toEqual('User Logged In');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('data');
  });
  it('should not login a user if no email', async () => {
    const res = await request(app)
      .post(`${AUTH_URL}/login`)
      .send({
        password: faker.random.word(),
      })
      .expect(statusCode.HTTP_BAD_REQUEST);
    expect(res.status).toEqual(statusCode.HTTP_BAD_REQUEST);
    expect(res.body.message).toEqual('Unable to login');
    expect(res.body.status).toEqual(false);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error[0].message).toEqual('email is required');
  });
  it('should not loign a user if no password', async () => {
    const res = await request(app).post(`${AUTH_URL}/login`).send({
      email: faker.internet.email(),
    });
    expect(res.status).toEqual(statusCode.HTTP_BAD_REQUEST);
    expect(res.body.message).toEqual('Unable to login');
    expect(res.body.status).toEqual(false);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error[0].message).toEqual('password is required');
  });
});
