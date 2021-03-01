import morgan from 'morgan';
import * as dotenv from 'dotenv';
import express from 'express';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import QuestionRoutes from './v1/lib/modules/question/route/question.route';
import DummyRoutes from './v1/lib/modules/dummy/route/dummy.route';
import AuthRoutes from './v1/lib/modules/auth/route/auth.route';
import AnswerRoutes from './v1/lib/modules/answer/route/answer.route';
import SubscriptionRoutes from './v1/lib/modules/subscriptions/route/subscription.route';

/**
 * routes
 */
dotenv.config();

class App {
  public app: express.Application;

  public questionRoutes: QuestionRoutes = new QuestionRoutes();

  public dummyRoutes: DummyRoutes = new DummyRoutes();

  public authRoutes: AuthRoutes = new AuthRoutes();

  public answerRoutes: AnswerRoutes = new AnswerRoutes();
  public subscriptionRoutes: SubscriptionRoutes = new SubscriptionRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.questionRoutes.routes(this.app);
    this.dummyRoutes.routes(this.app);
    this.authRoutes.routes(this.app);
    this.answerRoutes.routes(this.app);
    this.subscriptionRoutes.routes(this.app);
    this.app.get('/', (req, res) =>
      res.send('Korapay Senior Developer Technical Test!'),
    );
  }

  private config = (): void => {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(
      expressWinston.errorLogger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.json(),
        ),
      }),
    );
  };
}

export default new App().app;
