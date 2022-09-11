import { Router } from "express";
import { signUp } from "../controllers/userController";
import { validateSchema } from "../middlewares/validateSchema";
import { userSchema } from "../schemas/userSchema";
const route = Router();

route.post("/signup", validateSchema(userSchema), signUp);
export default route;
