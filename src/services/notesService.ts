import { CreateNote } from "../types/notesTypes";
import dotenv from "dotenv";
import { deleteNoteById, getAllNotes, getNoteById, insertNote } from "../repositories/notesRepository";

dotenv.config();

export async function newNoteService(createNote: CreateNote) {
  await insertNote(createNote);
}

export async function getNotesService(userId: number) {
  const allNotes = await getAllNotes(userId);
  return allNotes;
}

export async function getOneNote(noteId: number, userId: number) {
  const uniqueNote = await getNoteById(noteId);
  if (!uniqueNote)
    throw { code: "NotFound", message: "Note doesn't exist" };
  verifyUserToNote(userId, uniqueNote.userId);
 
  return uniqueNote;
}

export async function deleteOneNote(
  noteId: number,
  userId: number
) {
  const getNote = await getNoteById(noteId);
  if (!getNote) {
    throw { code: "NotFound", message: "Note doesn't exist" };
  }
  verifyUserToNote(userId, getNote.userId);
  await deleteNoteById(noteId);
}

function verifyUserToNote(userId: number, noteUserId: number) {
  if (noteUserId !== userId)
    throw {
      code: "Unauthorized",
      message: "This Note doesn't belong to this user",
    };
}
