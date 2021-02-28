import { Application } from 'express';
import DummyController from '../controller/dummy.controller';
import { DUMMY_URL } from '../../../utils/urls';

class DummyRoutes {
  public dummyController: DummyController = new DummyController();

  public routes = (app: Application): void => {
    app.route(`${DUMMY_URL}`).post(this.dummyController.create);
  };
}
export default DummyRoutes;
