import { Request, Response } from "express";
import { newCredentialService } from "../services/credentialServices";
import { CreateCredential } from "../types/crendentialTypes";
export async function createCredential(req: Request, res: Response) {
  const { userId } = res.locals;
  const newCredential: CreateCredential = {
    ...req.body,
    userId,
  };

  await newCredentialService(newCredential);
  res.sendStatus(201);
}
