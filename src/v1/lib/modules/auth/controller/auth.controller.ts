import { Request, Response } from 'express';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
} from '../../../utils/status-codes/http-status-codes';
import AuthRepository from '../repository/auth.repository';
import UserHelper from '../../../utils/helpers/helper';
import AuthHelper from '../utils/helper';

class AuthController {
  public register = async ({ body }: Request, response: Response) => {
    try {
      const { email, password } = body;
      const hash = await AuthHelper.hashPassword(password);
      const data = { email, password: hash };
      const user = await AuthRepository.register(data);
      const token = AuthHelper.createToken(user.id);
      return ResponseHandler.SuccessResponse(
        response,
        HTTP_CREATED,
        'User Created',
        {
          user: {
            email: user.email,
            id: user.id,
            createdAt: user.createdAt,
          },
          token,
        },
      );
    } catch (err) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };

  public login = async ({ body }: Request, response: Response) => {
    const { email, password } = body;
    const user = await UserHelper.getUser({ email });
    /**
     * check if password matches
     */
    try {
      const check = await AuthHelper.comparePassword(password, user.password);
      if (check) {
        const token = AuthHelper.createToken(user.id);
        return ResponseHandler.SuccessResponse(
          response,
          HTTP_OK,
          'User Logged In',
          { user: { email: user.email, id: user.id }, token },
        );
      }
      return ResponseHandler.ErrorResponse(
        response,
        HTTP_BAD_REQUEST,
        'Invalid Credentials',
      );
    } catch (e) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };
}
export default AuthController;
