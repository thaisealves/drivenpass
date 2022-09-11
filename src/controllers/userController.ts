import { Request, Response } from "express";
import { CreateUser } from "../types/userTypes";
import { createUser } from "../services/userService";
export async function signUp(req: Request, res: Response) {
  const newUser: CreateUser = req.body;
  await createUser(newUser);
  res.sendStatus(201);
}
