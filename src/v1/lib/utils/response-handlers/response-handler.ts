import { Response } from 'express';
import { HTTP_INTERNAL_SERVER_ERROR } from '../status-codes/http-status-codes';

export default class ResponseHandler {
  static ErrorResponse = (res: Response, statusCode: number, message = '') => {
    return res.status(statusCode).json({ message, status: false });
  };

  static SuccessResponse(
    res: Response,
    statusCode: number,
    message = '',
    data: any,
  ) {
    return res.status(statusCode).json({ message, status: true, data });
  }

  static ServerErrorResponse = (res: Response) =>
    res
      .status(HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal Server Error', status: false });

  static JoiErrorResponse(
    res: Response,
    statusCode: number,
    status: boolean,
    error: { message: string }[],
    message: string,
  ) {
    return res.status(statusCode).json({ status, message, error });
  }
}
