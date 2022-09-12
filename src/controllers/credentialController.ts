import { Request, Response } from "express";
import {
  deleteOneCredential,
  getCredentialsService,
  getOneCredential,
  newCredentialService,
} from "../services/credentialServices";
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

export async function getAllCredentials(req: Request, res: Response) {
  const { userId } = res.locals;

  const allCredentials = await getCredentialsService(userId);
  res.status(200).send(allCredentials);
}

export async function getUniqueCredential(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const uniqueCredential = await getOneCredential(Number(id), userId);
  res.status(200).send(uniqueCredential);
}

export async function deleteCredential(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await deleteOneCredential(Number(id), userId);
  res.sendStatus(204)
}
