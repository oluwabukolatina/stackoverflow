import { Request, Response } from 'express';
import QuestionRepository from '../repository/question.repository';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
} from '../../../utils/status-codes/http-status-codes';

class QuestionController {
  public createQuestion = async (req: any, response: Response) => {
    const { title, body } = req.body;
    const data = { title, body, userId: req.user.id };
    try {
      const question = await QuestionRepository.askQuestion(data);
      if (question) {
        return ResponseHandler.SuccessResponse(
          response,
          HTTP_CREATED,
          'Created Question',
          { question },
        );
      }
      return ResponseHandler.ErrorResponse(
        response,
        HTTP_BAD_REQUEST,
        'Unable to Create Question',
      );
    } catch (err) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };

  public getAllQuestions = async (request: Request, response: Response) => {
    try {
      const questions = await QuestionRepository.findQuestions();
      if (questions) {
        return ResponseHandler.SuccessResponse(
          response,
          HTTP_OK,
          'Fetched Questions',
          { questions },
        );
      }
      return ResponseHandler.ErrorResponse(
        response,
        HTTP_BAD_REQUEST,
        'Unable to get questions',
      );
    } catch (e) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };
}
export default QuestionController;
