import { cardType } from "@prisma/client";
interface ICard {
  id: number;
  title: string;
  cardNumber: string;
  cardName: string;
  cvv: string;
  expirationDate: string;
  password: string;
  isVirtual: boolean;
  type: cardType;
  userId: number;
}

type CreateCard = Omit<ICard, "id">;
type VerifyCard = Omit<ICard, "id" | "userId">;
export { ICard, CreateCard, VerifyCard };
