import { CreateCard } from "../types/cardsTypes";
import dotenv from "dotenv";
import {
  deleteCardById,
  getAllCards,
  getCardById,
  insertCard,
} from "../repositories/cardsRepository";
import Cryptr from "cryptr";

dotenv.config();

export async function newCardService(createCard: CreateCard) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);

  const encryptedPassword = cryptr.encrypt(createCard.password);
  const encryptedCvv = cryptr.encrypt(createCard.cvv);

  await insertCard({
    ...createCard,
    password: encryptedPassword,
    cvv: encryptedCvv,
  });
}

export async function getCardsService(userId: number) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  const allCards = await getAllCards(userId);
  const showCards = allCards.map((el) => {
    return {
      ...el,
      password: cryptr.decrypt(el.password),
      cvv: cryptr.decrypt(el.cvv),
    };
  });

  return showCards;
}

export async function getOneCard(cardId: number, userId: number) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  const uniqueCard = await getCardById(cardId);
  if (!uniqueCard) throw { code: "NotFound", message: "Card doesn't exist" };
  verifyUserToCard(userId, uniqueCard.userId);
  const showCard = {
    ...uniqueCard,
    password: cryptr.decrypt(uniqueCard.password),
    cvv: cryptr.decrypt(uniqueCard.cvv),
  };
  return showCard;
}

export async function deleteOneCard(cardId: number, userId: number) {
  const getCard = await getCardById(cardId);
  if (!getCard) {
    throw { code: "NotFound", message: "Card doesn't exist" };
  }
  verifyUserToCard(userId, getCard.userId);
  await deleteCardById(cardId);
}

function verifyUserToCard(userId: number, CardUserId: number) {
  if (CardUserId !== userId)
    throw {
      code: "Unauthorized",
      message: "This card doesn't belong to this user",
    };
}
