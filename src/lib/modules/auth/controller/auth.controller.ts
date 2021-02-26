import { Request, Response } from 'express';
import ResponseHandler from '../../../utils/response-handlers/ResponseHandler';
import { HTTP_CREATED } from '../../../utils/status-codes/http-status-codes';
import AuthRepository from '../repository/auth.repository';
import jwtHelper from '../utils/helper';

class AuthController {
  public register = async ({ body }: Request, response: Response) => {
    try {
      const { email, password } = body;
      const hashedPassword = jwtHelper.hashPassword(password);
      const data = { email, password: hashedPassword };
      const user = await AuthRepository.register(data);
      return ResponseHandler.SuccessResponse(
        response,
        HTTP_CREATED,
        true,
        'User Created',
        {
          user: {
            email: user.email,
            id: user.id,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          },
        },
      );
    } catch (err) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };
}
export default AuthController;
