import { Router } from "express";
import userRouter from "./userRouter";
import { validateToken } from "../middlewares/validateToken";
const router = Router();
router.use(userRouter);
router.use(validateToken);
export default router;
