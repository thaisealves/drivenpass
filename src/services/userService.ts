import bcrypt from "bcrypt";
import { CreateUser } from "../types/userTypes";
import { insertUser, getUserByEmail } from "../repositories/userRepository";
import jwt from "../utils/jwt";
export async function createUser(body: CreateUser) {
  const { email, password } = body;
  const passwordHash = bcrypt.hashSync(password, 10);
  const seeUser = await getUserByEmail(email);
  if (seeUser) {
    throw { code: "Unauthorized", message: "E-mail already used" };
  }
  await insertUser({ email, password: passwordHash });
}

export async function accessUser(body: CreateUser) {
  const seeUser = await getUserByEmail(body.email);
  if (!seeUser) {
    throw { code: "Conflict", message: "E-mail not registred" };
  }
  verifyUser(seeUser.password, body.password);
  const token = jwt.createToken({ id: seeUser.id });
  return token;
}

function verifyUser(password: string, givenPassword: string) {
  if (!bcrypt.compareSync(givenPassword, password)) {
    throw { code: "Unauthorized", message: "Password incorrect" };
  }
}
