import joi from "joi";
import { VerifyCard } from "../types/cardsTypes";
export const cardSchema = joi.object<VerifyCard>({
  title: joi.string().required(),
  cardNumber: joi
    .string()
    .max(16)
    .pattern(/^\d+$/)
    .message("Card Number must contain only numbers")
    .required(),
  cardName: joi.string().required(),
  cvv: joi
    .string()
    .length(3)
    .pattern(/^\d+$/)
    .message("CVV must contain only numbers")
    .required(),
  expirationDate: joi
    .string()
    .length(5)
    .pattern(/^[0-9]{2}\/[0-9]{2}$/)
    .message("Expiration Date must be in the MM/YY format")
    .required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid("credit", "debt", "both").required(),
});
