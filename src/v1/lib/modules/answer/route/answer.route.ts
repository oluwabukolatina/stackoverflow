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

    /**
     * only logged in user can upvote answers
     */
    app
      .route(`${ANSWER_URL}/upvote/:id`)
      .put(
        auth,
        validation.checkIfAnswerExists,
        this.answerController.upvoteAnswer,
      );

    /**
     * only logged in user can downvote questions
     */
    app
      .route(`${ANSWER_URL}/downvote/:id`)
      .put(
        auth,
        validation.checkIfAnswerExists,
        this.answerController.downvoteAnswer,
      );
  };
}
export default AnswerRoutes;
