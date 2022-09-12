import { CreateCredential } from "../types/crendentialTypes";
import { prisma } from "../utils/database";

export async function insertCredential(createCredential: CreateCredential) {
  await prisma.credentials.create({
    data: createCredential,
  });
}
