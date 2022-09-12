import joi from "joi";
import { VerifyCredential } from "../types/crendentialTypes";
export const credentialSchema = joi.object<VerifyCredential>({
  title: joi.string().required(),
  url: joi.string().uri().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});
