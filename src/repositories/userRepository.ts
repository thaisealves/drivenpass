import { CreateUser } from "../types/userTypes";
import { prisma } from "../dbStrategy/database";
export async function insertUser(createUser: CreateUser) {
  await prisma.users.create({
    data: createUser,
  });
}

export async function getUserByEmail(email: string) {
  const userByEmail = await prisma.users.findUnique({
    where: { email },
  });
  return userByEmail;
}
