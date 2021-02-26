import { Response } from 'express';
import { HTTP_INTERNAL_SERVER_ERROR } from '../status-codes/http-status-codes';

export default class ResponseHandler {
  static ErrorResponse(
    res: Response,
    statusCode: number,
    status: boolean,
    message = '',
  ) {
    return res.status(statusCode).json({ message, status });
  }

  static SuccessResponse(
    res: Response,
    statusCode: number,
    status: boolean,
    message = '',
    data: any,
  ) {
    return res.status(statusCode).json({ message, status, data });
  }

  static ServerErrorResponse = (res: Response) =>
    res
      .status(HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: 'something went wrong', status: false });
}
