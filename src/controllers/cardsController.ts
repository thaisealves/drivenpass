import { Request, Response } from "express";
import {
  deleteOneCard,
  getCardsService,
  getOneCard,
  newCardService,
} from "../services/cardsService";
import { CreateCard } from "../types/cardsTypes";
export async function createCard(req: Request, res: Response) {
  const { userId } = res.locals;
  const newCard: CreateCard = {
    ...req.body,
    userId,
  };

  await newCardService(newCard);
  res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response) {
  const { userId } = res.locals;

  const allCards = await getCardsService(userId);
  res.status(200).send(allCards);
}

export async function getUniqueCard(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const uniqueCard = await getOneCard(Number(id), userId);
  res.status(200).send(uniqueCard);
}

export async function deleteCard(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await deleteOneCard(Number(id), userId);
  res.sendStatus(204);
}
