import { Request, Response } from "express";
import {
  deleteOneNote,
  getNotesService,
  getOneNote,
  newNoteService,
} from "../services/notesService";
import { CreateNote } from "../types/notesTypes";
export async function createNote(req: Request, res: Response) {
  const { userId } = res.locals;
  const newNote: CreateNote = {
    ...req.body,
    userId,
  };

  await newNoteService(newNote);
  res.sendStatus(201);
}

export async function getAllNotes(req: Request, res: Response) {
  const { userId } = res.locals;

  const allNotes = await getNotesService(userId);
  res.status(200).send(allNotes);
}

export async function getUniqueNote(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const uniqueNote = await getOneNote(Number(id), userId);
  res.status(200).send(uniqueNote);
}

export async function deleteNote(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await deleteOneNote(Number(id), userId);
  res.sendStatus(204);
}
