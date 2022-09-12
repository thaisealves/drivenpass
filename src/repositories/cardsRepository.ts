import { CreateCard } from "../types/cardsTypes";
import { prisma } from "../utils/database";

export async function insertCard(createCard: CreateCard) {
  await prisma.cards.create({
    data: createCard,
  });
}

export async function getAllCards(userId: number) {
  const allCards = await prisma.cards.findMany({
    where: { userId: userId },
  });
  return allCards;
}

export async function getCardById(cardId: number) {
  const uniqueCard = await prisma.cards.findUnique({
    where: { id: cardId },
  });
  return uniqueCard;
}

export async function deleteCardById(cardId: number) {
  await prisma.cards.delete({
    where: { id: cardId },
  });
}
