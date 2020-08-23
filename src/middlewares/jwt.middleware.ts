import { Request, Response, NextFunction } from 'express';
import config from '../config/config';

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
