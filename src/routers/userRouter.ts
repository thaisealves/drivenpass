import { Router } from "express";
import { signUp, signIn } from "../controllers/userController";
import { validateSchema } from "../middlewares/validateSchema";
import { userSchema } from "../schemas/userSchema";
const route = Router();

route.post("/signup", validateSchema(userSchema), signUp);
route.post("/signin", validateSchema(userSchema), signIn)
export default route;
