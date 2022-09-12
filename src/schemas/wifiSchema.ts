import joi from "joi";
import { VerifyWifi } from "../types/wifiTypes";
export const wifiSchema = joi.object<VerifyWifi>({
  title: joi.string().required(),
  password: joi.string().required(),
  network: joi.string().required(),
});
