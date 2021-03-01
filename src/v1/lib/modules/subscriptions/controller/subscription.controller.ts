import { Response } from 'express';
import SubscriptionRepository from '../repository/subscription.repository';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import { HTTP_CREATED } from '../../../utils/status-codes/http-status-codes';
import QuestionHelper from '../../answer/utils/helper';
import SubscriptionHelper from '../utils/helper';
import Helper from '../../../utils/helpers/helper';

class SubscriptionController {
  public createSubscription = async (req: any, response: Response) => {
    try {
      const question = await QuestionHelper.findQuestion({ id: req.params.id });
      const subscribe = await SubscriptionRepository.create({
        questionId: question.id,
        userId: req.user.id,
        email: req.user.email,
      });
      if (subscribe) {
        /**
         * notify user about being subscribed
         */
        SubscriptionHelper.sendEmailToUser(
          Helper.createSubscriptionNotification(req.user.email),
        );
        return ResponseHandler.SuccessResponse(
          response,
          HTTP_CREATED,
          'User Subscribed',
          { subscribe: { id: subscribe.id, subscriberEmail: subscribe.email } },
        );
      }
      return ResponseHandler.ErrorResponse(
        response,
        400,
        'Unable to subscribe user to question',
      );
    } catch (err) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };
}
export default SubscriptionController;
