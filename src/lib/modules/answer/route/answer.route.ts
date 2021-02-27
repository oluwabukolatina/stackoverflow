import { Application } from 'express';
import { ANSWER_URL } from '../../../utils/urls';
import AnswerController from '../controller/answer.controller';
import validation from '../validations/validation';
import auth from '../../../utils/middlewares/auth';
import questionValidation from '../../question/validations/validation';

class AnswerRoutes {
  public answerController: AnswerController = new AnswerController();

  public routes = (app: Application): void => {
    /**
     * question id
     */
    app
      .route(`${ANSWER_URL}/:id`)
      .post(
        auth,
        validation.validateAnswer,
        questionValidation.checkIfQuestionExists,
        this.answerController.answerQuestion,
      );
  };
}
export default AnswerRoutes;
