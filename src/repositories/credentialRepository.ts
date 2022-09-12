import { CreateCredential } from "../types/crendentialTypes";
import { prisma } from "../utils/database";

export async function insertCredential(createCredential: CreateCredential) {
  await prisma.credentials.create({
    data: createCredential,
  });
}

export async function getAllCredentials(userId: number) {
  const allCredentials = await prisma.credentials.findMany({
    where: { userId: userId },
  });
  return allCredentials;
}

export async function getCredentialById(credentialId: number) {
  const uniqueCredential = await prisma.credentials.findUnique({
    where: { id: credentialId },
  });
  return uniqueCredential;
}

export async function deleteCredentialById(credentialId: number) {
  await prisma.credentials.delete({
    where: { id: credentialId },
  });
}
