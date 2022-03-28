import { NextFunction, Request, Response } from "express";

import { AppError } from "../erros/AppError";

export async function appErrorValidation(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    message: `Internal server error - ${err.message}`,
  });

  return next();
}
