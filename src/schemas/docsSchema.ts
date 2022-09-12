import joi from "joi";
import { VerifyDoc } from "../types/docsTypes";
export const docSchema = joi.object<VerifyDoc>({
  type: joi.string().valid("CNH", "RG").required(),
  fullName: joi.string().required(),
  emissionDate: joi
    .string()
    .pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)
    .message("Emission Date must be in the DD/MM/YYYY format")
    .required(),
  expiryDate: joi
    .string()
    .pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)
    .message("Expiry Date must be in the DD/MM/YYYY format")
    .required(),
  registerNumber: joi.string().required(),
  issuingBody: joi.string().required(),
});
