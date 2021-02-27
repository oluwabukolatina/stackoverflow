import { Response } from 'express';
import AnswerRepository from '../repository/answer.repository';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
} from '../../../utils/status-codes/http-status-codes';

class AnswerController {
  public answerQuestion = async (req: any, response: Response) => {
    try {
      const answer = await AnswerRepository.create({
        questionId: Number(req.params.id),
        answer: req.body.answer,
        userId: req.user.id,
      });
      if (answer) {
        return ResponseHandler.SuccessResponse(
          response,
          HTTP_CREATED,
          'Question Answered',
          {
            answer: answer.answer,
          },
        );
      }
      return ResponseHandler.ErrorResponse(
        response,
        HTTP_BAD_REQUEST,
        'Unable to create question',
      );
    } catch (err) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };
}
export default AnswerController;
