import jwt from "../utils/jwt";
import { Request, Response, NextFunction } from "express";
export function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw {
      code: "Unauthorized",
      message: "You have to provide an authorization",
    };
  }
  const token: string = authorization.replace("Bearer ", "");

  const verified = jwt.verifyToken(token);

  if (!verified) {
    throw { code: "Unauthorized", message: "Your authorization is uncorrect" };
  }

  console.log(verified);
  next();
}
