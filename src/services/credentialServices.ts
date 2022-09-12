import { insertCredential } from "../repositories/credentialRepository";
import { CreateCredential } from "../types/crendentialTypes";
import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();
export async function newCredentialService(createCredential: CreateCredential) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);

  const encryptedPassword = cryptr.encrypt(createCredential.password);
  await insertCredential({ ...createCredential, password: encryptedPassword });
}
