import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import { HTTP_BAD_REQUEST } from '../../../utils/status-codes/http-status-codes';

async function validateAnswer(
  { body }: Request,
  res: Response,
  next: NextFunction,
) {
  const schema = Joi.object().keys({
    answer: Joi.string().required(),
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
      'Unable to Answer Question',
    );
  return next();
}

export default {
  validateAnswer,
};
