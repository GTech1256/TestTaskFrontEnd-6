import { Response, Request, NextFunction } from 'express';

import httpStatus from 'http-status';
import expressValidation from 'express-validation';
import APIError from '../utils/APIError';

interface ResponseError extends Error {
  status?: number;
  errors? : string[]
}

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export const handler = (
  err: ResponseError, 
  req: Request, 
  res: Response
) => {
  const response = {
    code: err.status,
    message: err.message, // || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (process.env.NODE_ENV !== 'development') {
    delete response.stack;
  }

  res.status(<number>err.status);
  res.json(response);
};

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
export const converter = (
  err: ResponseError, 
  req: Request, 
  res: Response
) => {
  let convertedError = err;

  if (err instanceof expressValidation.ValidationError) {
    console.log('valdation', err.status)
    convertedError = new APIError({
      message: 'Validation Error',
      errors: err.errors,
      status: err.status,
      stack: err.stack,
      name: 'ValidationError',
    });
  } else if (!(err instanceof APIError)) {
    console.log('Api', err.status)
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
      errors: err.errors || [],
      name: 'APIError'
    });
  }

  return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
export const notFound = (
  req: Request, 
  res: Response,
) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
    name: 'APIError',
    errors: []
  });

  return handler(err, req, res);
};
