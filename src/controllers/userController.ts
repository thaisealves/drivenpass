import { Request, Response } from "express";
import { CreateUser } from "../types/userTypes";
import { createUser, accessUser } from "../services/userService";
export async function signUp(req: Request, res: Response) {
  await createUser(req.body);
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const userToken = await accessUser(req.body);
  res.status(200).send(userToken);
}
