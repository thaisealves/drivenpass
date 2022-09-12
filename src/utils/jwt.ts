import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IToken } from "../types/tokenTypes";

dotenv.config();

const SECRET: string = String(process.env.SECRET_KEY);
const EXP_TIME: string = String(process.env.TOKEN_TIME) || "5m";
const createToken = (data: object) => {
  return jwt.sign(data, SECRET, { expiresIn: EXP_TIME });
};

const verifyToken = (data: string) => {
  const dataToken = jwt.verify(data, SECRET) as IToken;
  if (!dataToken) throw { code: "Unauthorized", message: "InvalidToken" };

  return dataToken.id;
};

export default {
  createToken,
  verifyToken,
};
