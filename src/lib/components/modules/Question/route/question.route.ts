import { Application } from 'express';
import QuestionController from '../controller/question.controller';

class QuestionRoutes {
  public questionController: QuestionController = new QuestionController();

  public routes = (app: Application): void => {
    const QUESTIONS_URL = '/api/v1/korapay';
    app.route(`${QUESTIONS_URL}`).post(this.questionController.createQuestion);
  };
}
export default QuestionRoutes;
