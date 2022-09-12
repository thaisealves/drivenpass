import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { credentialSchema } from "../schemas/credentialSchema";
import { createCredential } from "../controllers/credentialController";
const route = Router();

route.post("/credential", validateSchema(credentialSchema), createCredential);
export default route;
