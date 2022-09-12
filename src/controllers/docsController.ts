import { Request, Response } from "express";
import {
  deleteOneDoc,
  getDocsService,
  getOneDoc,
  newDocService,
} from "../services/docsService";
import { CreateDoc } from "../types/docsTypes";
export async function createDoc(req: Request, res: Response) {
  const { userId } = res.locals;
  const newDoc: CreateDoc = {
    ...req.body,
    userId,
  };

  await newDocService(newDoc);
  res.sendStatus(201);
}

export async function getAllDocs(req: Request, res: Response) {
  const { userId } = res.locals;

  const allDocs = await getDocsService(userId);
  res.status(200).send(allDocs);
}

export async function getUniqueDoc(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const uniqueDoc = await getOneDoc(Number(id), userId);
  res.status(200).send(uniqueDoc);
}

export async function deleteDoc(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await deleteOneDoc(Number(id), userId);
  res.sendStatus(204);
}
