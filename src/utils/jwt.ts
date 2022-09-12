import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET: string = String(process.env.SECRET_KEY);
const EXP_TIME: string = String(process.env.TOKEN_TIME);
const createToken = (data: object) => {
  return jwt.sign(data, SECRET, { expiresIn: EXP_TIME });
};

const verifyToken = (data: string) => {
  try {
    const dataToken = jwt.verify(data, SECRET);
    return dataToken;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  createToken,
  verifyToken,
};
