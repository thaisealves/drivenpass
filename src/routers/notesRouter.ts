import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { noteSchema } from "../schemas/notesSchema";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getUniqueNote,
} from "../controllers/notesController";
const route = Router();

route.post("/note", validateSchema(noteSchema), createNote);
route.get("/notes", getAllNotes);
route.get("/note/:id", getUniqueNote);
route.delete("/note/:id", deleteNote);
export default route;
