import { Request, Response } from 'express';
import QuestionRepository from '../repository/question.repository';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
} from '../../../utils/status-codes/http-status-codes';
import QuestionHelper from '../../answer/utils/helper';

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
  public upvoteQuestion = async (req: Request, res: Response) => {
    try {
      const question = await QuestionHelper.findQuestion({
        id: Number(req.params.id),
      });
      question.upvotes += 1;
      const values = { upvotes: question.upvotes };
      const options = { id: Number(req.params.id) };
      await QuestionRepository.updateQuestion(values, options)
        .then(() => {
          return ResponseHandler.SuccessResponse(
            res,
            HTTP_OK,
            'Upvoted Question',
            {
              updated: {
                questionId: question.id,
                title: question.title,
                body: question.body,
                upvotes: question.upvotes,
                downvotes: question.downvotes,
              },
            },
          );
        })
        .catch(() => {
          return ResponseHandler.ErrorResponse(
            res,
            HTTP_BAD_REQUEST,
            'Unable to upvote',
          );
        });
    } catch (e) {
      return ResponseHandler.ServerErrorResponse(res);
    }
  };
  public downvoteQuestion = async (req: Request, res: Response) => {
    try {
      const question = await QuestionHelper.findQuestion({
        id: Number(req.params.id),
      });
      question.downvotes += 1;
      const values = { downvotes: question.downvotes };
      const options = { id: Number(req.params.id) };
      await QuestionRepository.updateQuestion(values, options)
        .then(() => {
          return ResponseHandler.SuccessResponse(
            res,
            HTTP_OK,
            'Downvoted Question',
            {
              updated: {
                questionId: question.id,
                title: question.title,
                body: question.body,
                upvotes: question.upvotes,
                downvotes: question.downvotes,
              },
            },
          );
        })
        .catch(() => {
          return ResponseHandler.ErrorResponse(
            res,
            HTTP_BAD_REQUEST,
            'Unable to upvote',
          );
        });
    } catch (e) {
      return ResponseHandler.ServerErrorResponse(res);
    }
  };
}
export default QuestionController;
