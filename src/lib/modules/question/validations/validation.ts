import { NextFunction, Request, Response } from 'express';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import { HTTP_NOT_FOUND } from '../../../utils/status-codes/http-status-codes';
import QuestionHelper from '../../answer/utils/helper';

async function checkIfQuestionExists(
  { params }: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const question = await QuestionHelper.findQuestion({
      id: Number(params.id),
    });
    if (question) {
      return next();
    }
    return ResponseHandler.ErrorResponse(
      res,
      HTTP_NOT_FOUND,
      'Question Not Found',
    );
  } catch (e) {
    return ResponseHandler.ServerErrorResponse(res);
  }
}

export default {
  checkIfQuestionExists,
};
