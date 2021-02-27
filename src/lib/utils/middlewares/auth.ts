import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import ResponseHandler from '../response-handlers/response-handler';

function auth(req: any, res: Response, next: NextFunction) {
  const token = req.header('X-Auth-Token');
  if (!token)
    return ResponseHandler.ErrorResponse(
      res,
      401,
      false,
      'No Token Found. Authorization Denied',
    );

  try {
    /**
     * add uder from the payload
     */
    req.user = jwt.verify(token, String(process.env.APP_JWT_SECRET));
    return next();
  } catch (e) {
    return ResponseHandler.ServerErrorResponse(res);
  }
}
export default auth;
