import { Application } from 'express';
import UserController from '../controller/user.controller';
import { USER_URL } from '../../../utils/urls';

class UserRoutes {
  public userController: UserController = new UserController();

  public routes = (app: Application): void => {
    // app.route(`${USER_URL}`).post(this.userController.create);
  };
}
export default UserRoutes;
