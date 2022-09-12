import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { wifiSchema } from "../schemas/wifiSchema";
import {
  createWifi,
  deleteWifi,
  getAllWifis,
  getUniqueWifi,
} from "../controllers/wifiController";
const route = Router();

route.post("/wifi", validateSchema(wifiSchema), createWifi);
route.get("/wifis", getAllWifis);
route.get("/wifi/:id", getUniqueWifi);
route.delete("/wifi/:id", deleteWifi);
export default route;
