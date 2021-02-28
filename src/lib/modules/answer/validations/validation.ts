import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import {
  HTTP_BAD_REQUEST,
  HTTP_NOT_FOUND,
} from '../../../utils/status-codes/http-status-codes';
import AnswerRepository from '../repository/answer.repository';

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

async function checkIfAnswerExists(
  { params }: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const answer = await AnswerRepository.findAnswer({
      id: Number(params.id),
    });
    if (answer) {
      return next();
    }
    return ResponseHandler.ErrorResponse(
      res,
      HTTP_NOT_FOUND,
      'Answer Not Found',
    );
  } catch (e) {
    return ResponseHandler.ServerErrorResponse(res);
  }
}

export default {
  validateAnswer,
  checkIfAnswerExists,
};
