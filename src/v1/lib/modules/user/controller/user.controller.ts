import { Request, Response } from 'express';
import UserRepository from '../repository/user.repository';
import ResponseHandler from '../../../utils/response-handlers/response-handler';
import { HTTP_CREATED } from '../../../utils/status-codes/http-status-codes';

class UserController {
  public create = async (req: Request, response: Response) => {
    try {
      const dummy = await UserRepository.create(req.body);
      return ResponseHandler.SuccessResponse(
        response,
        HTTP_CREATED,
        true,
        'Created Dummy',
        { dummy },
      );
    } catch (err) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };
}
export default UserController;
