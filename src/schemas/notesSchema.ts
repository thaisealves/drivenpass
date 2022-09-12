import joi from "joi";
import { VerifyNote } from "../types/notesTypes";
export const noteSchema = joi.object<VerifyNote>({
  title: joi.string().max(50).required(),
  note: joi.string().max(1000).required(),
});
