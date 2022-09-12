import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { docSchema } from "../schemas/docsSchema";
import {
  createDoc,
  deleteDoc,
  getAllDocs,
  getUniqueDoc,
} from "../controllers/docsController";
const route = Router();

route.post("/doc", validateSchema(docSchema), createDoc);
route.get("/docs", getAllDocs);
route.get("/doc/:id", getUniqueDoc);
route.delete("/doc/:id", deleteDoc);
export default route;
