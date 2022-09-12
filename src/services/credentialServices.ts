import {
  deleteCredentialById,
  getAllCredentials,
  getCredentialById,
  insertCredential,
} from "../repositories/credentialRepository";
import { CreateCredential } from "../types/crendentialTypes";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

export async function newCredentialService(createCredential: CreateCredential) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  let count = 0;
  const encryptedPassword = cryptr.encrypt(createCredential.password);
  const allCredentials = await getAllCredentials(createCredential.userId);
  allCredentials.map((el) => {
    if (el.title === createCredential.title) {
      count++;
    }
  });
  if (count > 0) {
    throw { code: "Conflict", message: "Title already used" };
  }
  
  await insertCredential({ ...createCredential, password: encryptedPassword });
}

export async function getCredentialsService(userId: number) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  const allCredentials = await getAllCredentials(userId);
  const showCredentials = allCredentials.map((el) => {
    return {
      ...el,
      password: cryptr.decrypt(el.password),
    };
  });

  return showCredentials;
}

export async function getOneCredential(credentialId: number, userId: number) {
  const uniqueCredential = await getCredentialById(credentialId);
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  if (!uniqueCredential)
    throw { code: "NotFound", message: "Credential doesn't exist" };
  verifyUserToCredential(userId, uniqueCredential.userId);
  const showCredential = {
    ...uniqueCredential,
    password: cryptr.decrypt(uniqueCredential.password),
  };
  return showCredential;
}

export async function deleteOneCredential(
  credentialId: number,
  userId: number
) {
  const getCredential = await getCredentialById(credentialId);
  if (!getCredential) {
    throw { code: "NotFound", message: "Credential doesn't exist" };
  }
  verifyUserToCredential(userId, getCredential.userId);
  await deleteCredentialById(credentialId);
}

function verifyUserToCredential(userId: number, credentialUserId: number) {
  if (credentialUserId !== userId)
    throw {
      code: "Unauthorized",
      message: "This credential doesn't belong to this user",
    };
}
