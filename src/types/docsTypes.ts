import { docType } from "@prisma/client";
interface IDocument {
  id: number;
  type: docType;
  fullName: string;
  emissionDate: string;
  expiryDate: string;
  registerNumber: string;
  issuingBody: string;
  userId: number;
}

type CreateDoc = Omit<IDocument, "id">;
type VerifyDoc = Omit<IDocument, "id" | "userId">;
export { IDocument, CreateDoc, VerifyDoc };
