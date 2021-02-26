import { Request, Response } from 'express';
import DummyRepository from '../repository/dummy.repository';
import ResponseHandler from '../../../utils/response-handlers/ResponseHandler';
import { HTTP_CREATED } from '../../../utils/status-codes/http-status-codes';

class DummyController {
  public create = async (req: Request, response: Response) => {
    try {
      const dummy = await DummyRepository.create(req.body);
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
export default DummyController;
