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

export async function getCardById(CardId: number) {
  const uniqueCard = await prisma.cards.findUnique({
    where: { id: CardId },
  });
  return uniqueCard;
}

export async function deleteCardById(CardId: number) {
  await prisma.cards.delete({
    where: { id: CardId },
  });
}
