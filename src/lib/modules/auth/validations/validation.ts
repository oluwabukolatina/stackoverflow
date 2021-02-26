import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import { HTTP_BAD_REQUEST } from '../../../utils/status-codes/http-status-codes';
import UserRepository from '../../user/repository/user.repository';

/**
 * to sign the user
 * @param body
 * @param res
 * @param next
 */
async function validateRegister(
  { body }: Request,
  res: Response,
  next: NextFunction,
) {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(body, { stripUnknown: true });
  if (error)
    return ResponseHandler.JoiErrorResponse(
      res,
      HTTP_BAD_REQUEST,
      false,
      error.details.map(({ message }) => ({
        message: message.replace(/['"]/g, ''),
      })),
      'Unable to register',
    );
  return next();
}

/**
 * check if user trying to create an account exists already
 * @param body
 * @param res
 * @param next
 */
async function checkIfUserExists(
  { body }: Request,
  res: Response,
  next: NextFunction,
) {
  const { email } = body;
  const user = await UserRepository.getUser({ email });
  if (user)
    return ResponseHandler.ErrorResponse(
      res,
      HTTP_BAD_REQUEST,
      false,
      'Invalid Email/Password',
    );
  return next();
}

export default {
  validateRegister,
  checkIfUserExists,
};
