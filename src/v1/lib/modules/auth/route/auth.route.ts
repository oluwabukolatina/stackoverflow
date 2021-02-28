import { Application } from 'express';
import AuthController from '../controller/auth.controller';
import { AUTH_URL } from '../../../utils/urls';
import validation from '../validations/validation';

class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes = (app: Application): void => {
    app
      .route(`${AUTH_URL}/register`)
      .post(
        validation.validateRegister,
        validation.checkIfUserExists,
        this.authController.register,
      );

    app
      .route(`${AUTH_URL}/login`)
      .post(
        validation.validateLogin,
        validation.checkIfUserCanLogin,
        this.authController.login,
      );
  };
}
export default AuthRoutes;
