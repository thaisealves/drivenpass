import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { credentialSchema } from "../schemas/credentialSchema";
import {
  createCredential,
  deleteCredential,
  getAllCredentials,
  getUniqueCredential,
} from "../controllers/credentialController";
const route = Router();

route.post("/credential", validateSchema(credentialSchema), createCredential);
route.get("/credential", getAllCredentials);
route.get("/credential/:id", getUniqueCredential);
route.delete("/credential/:id", deleteCredential);
export default route;
