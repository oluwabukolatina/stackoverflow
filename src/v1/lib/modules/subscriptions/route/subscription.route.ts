import { Application } from 'express';
import SubscriptionController from '../controller/subscription.controller';
import { SUBSCRIPTION_URL } from '../../../utils/urls';
import auth from '../../../utils/middlewares/auth';
import questionValidation from '../../question/validations/validation';

class SubscriptionRoutes {
  public subscriptionController: SubscriptionController = new SubscriptionController();

  public routes = (app: Application): void => {
    app
      .route(`${SUBSCRIPTION_URL}/question/:id`)
      .post(
        auth,
        questionValidation.checkIfQuestionExists,
        this.subscriptionController.createSubscription,
      );
  };
}
export default SubscriptionRoutes;
