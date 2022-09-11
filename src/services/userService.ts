import bcrypt from "bcrypt";
import { CreateUser } from "../types/userTypes";
import { insertUser, getUserByEmail } from "../repositories/userRepository";
export async function createUser(body: CreateUser) {
  const { email, password } = body;
  const passwordHash = bcrypt.hashSync(password, 10);
  const seeUser = await getUserByEmail(email);
  if (seeUser) {
    throw { code: "Unauthorized", message: "E-mail already used" };
  }
  await insertUser({ email, password: passwordHash });
}
