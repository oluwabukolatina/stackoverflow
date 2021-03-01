import { RequestHandler, Response } from 'express';
import AnswerRepository from '../repository/answer.repository';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
} from '../../../utils/status-codes/http-status-codes';
import Helper from '../../../utils/helpers/helper';
import SubscriptionHelper from '../../subscriptions/utils/helper';
import question from '../../../../../../database/models/question';

class AnswerController {
  public answerQuestion = async (req: any, response: Response) => {
    try {
      const answer = await AnswerRepository.create({
        questionId: Number(req.params.id),
        answer: req.body.answer,
        userId: req.user.id,
      });
      if (answer) {
        await SubscriptionHelper.sendEmailToSubscribers(req.params.id);
        return ResponseHandler.SuccessResponse(
          response,
          HTTP_CREATED,
          'Question Answered',
          { answered: { answer: answer.answer, id: answer.id } },
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

  public upvoteAnswer: RequestHandler = async (req, res) => {
    try {
      const answer = await AnswerRepository.findAnswer({
        id: Number(req.params.id),
      });
      answer.upvotes += 1;
      const values = { upvotes: answer.upvotes };
      const options = { id: Number(req.params.id) };
      return await AnswerRepository.updateAnswer(values, options)
        .then(() => {
          return ResponseHandler.SuccessResponse(
            res,
            HTTP_OK,
            'Upvoted Answer',

            {
              updated: {
                answerId: answer.id,
                answer: answer.answer,
                upvotes: answer.upvotes,
                downvotes: answer.downvotes,
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

  public downvoteAnswer: RequestHandler = async (req, res) => {
    try {
      const answer = await AnswerRepository.findAnswer({
        id: Number(req.params.id),
      });
      answer.downvotes += 1;
      const values = { downvotes: answer.downvotes };
      const options = { id: Number(req.params.id) };
      return await AnswerRepository.updateAnswer(values, options)
        .then(() => {
          return ResponseHandler.SuccessResponse(
            res,
            HTTP_OK,
            'Downvoted Answer',

            {
              updated: {
                answerId: answer.id,
                answer: answer.answer,
                upvotes: answer.upvotes,
                downvotes: answer.downvotes,
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
export default AnswerController;
