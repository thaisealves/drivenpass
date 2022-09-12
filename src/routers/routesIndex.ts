import { Router } from "express";
import userRouter from "./userRouter";
import { validateToken } from "../middlewares/validateToken";
import credentialRouter from "./credentialRouter";
const router = Router();
router.use(userRouter);
router.use(validateToken);
router.use(credentialRouter);
export default router;
