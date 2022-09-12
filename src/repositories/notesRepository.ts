import { CreateNote } from "../types/notesTypes";
import { prisma } from "../utils/database";

export async function insertNote(createNote: CreateNote) {
  await prisma.notes.create({
    data: createNote,
  });
}

export async function getAllNotes(userId: number) {
  const allNotes = await prisma.notes.findMany({
    where: { userId: userId },
  });
  return allNotes;
}

export async function getNoteById(noteId: number) {
  const uniqueNote = await prisma.notes.findUnique({
    where: { id: noteId },
  });
  return uniqueNote;
}

export async function deleteNoteById(noteId: number) {
  await prisma.notes.delete({
    where: { id: noteId },
  });
}
