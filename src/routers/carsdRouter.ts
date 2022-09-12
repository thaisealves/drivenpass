import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { cardSchema } from "../schemas/cardsSchema";
import {
  createCard,
  deleteCard,
  getAllCards,
  getUniqueCard,
} from "../controllers/cardsController";
const route = Router();

route.post("/card", validateSchema(cardSchema), createCard);
route.get("/cards", getAllCards);
route.get("/card/:id", getUniqueCard);
route.delete("/card/:id", deleteCard);
export default route;
