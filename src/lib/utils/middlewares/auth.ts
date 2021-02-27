import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import ResponseHandler from '../response-handlers/response-handler';
import { HTTP_UNAUTHORIZED } from '../status-codes/http-status-codes';

function auth(req: any, res: Response, next: NextFunction) {
  const token = req.header('X-Auth-Token');
  if (!token)
    return ResponseHandler.ErrorResponse(
      res,
      HTTP_UNAUTHORIZED,
      'No Token Found. Authorization Denied',
    );
  try {
    /**
     * add uder fromm the payload
     */
    req.user = jwt.verify(token, String(process.env.JWT_SECRET));
    return next();
  } catch (e) {
    return ResponseHandler.ServerErrorResponse(res);
  }
}
export default auth;
