import { Application } from 'express';
import QuestionController from '../controller/question.controller';
import auth from '../../../utils/middlewares/auth';

class QuestionRoutes {
  public questionController: QuestionController = new QuestionController();

  public routes = (app: Application): void => {
    const QUESTIONS_URL = '/api/v1/korapay/question';
    app
      .route(`${QUESTIONS_URL}`)
      .post(auth, this.questionController.createQuestion);
  };
}
export default QuestionRoutes;
