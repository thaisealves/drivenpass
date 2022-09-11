import joi from "joi";
import { CreateUser } from "../types/userTypes";
export const userSchema = joi.object<CreateUser>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});
