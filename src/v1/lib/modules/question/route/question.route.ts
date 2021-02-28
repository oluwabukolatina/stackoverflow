import { Application } from 'express';
import QuestionController from '../controller/question.controller';
import auth from '../../../utils/middlewares/auth';
import { QUESTIONS_URL } from '../../../utils/urls';
import questionValidation from '../validations/validation';

class QuestionRoutes {
  public questionController: QuestionController = new QuestionController();

  public routes = (app: Application): void => {
    app
      .route(`${QUESTIONS_URL}`)
      .post(auth, this.questionController.createQuestion);
    /**
     * not protected so anyone can see all questions
     */
    app.route(`${QUESTIONS_URL}`).get(this.questionController.getAllQuestions);
    /**
     * only logged in user can upvote questions
     */
    app
      .route(`${QUESTIONS_URL}/upvote/:id`)
      .put(
        auth,
        questionValidation.checkIfQuestionExists,
        this.questionController.upvoteQuestion,
      );

    /**
     * only logged in user can downvote questions
     */
    app
      .route(`${QUESTIONS_URL}/downvote/:id`)
      .put(
        auth,
        questionValidation.checkIfQuestionExists,
        this.questionController.downvoteQuestion,
      );
  };
}
export default QuestionRoutes;
