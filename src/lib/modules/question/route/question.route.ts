import { Application } from 'express';
import QuestionController from '../controller/question.controller';
import auth from '../../../utils/middlewares/auth';
import { QUESTIONS_URL } from '../../../utils/urls';

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
  };
}
export default QuestionRoutes;
