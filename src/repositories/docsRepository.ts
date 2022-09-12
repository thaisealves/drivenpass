import { CreateDoc } from "../types/docsTypes";
import { prisma } from "../utils/database";

export async function insertDoc(createDoc: CreateDoc) {
  await prisma.documents.create({
    data: createDoc,
  });
}

export async function getAllDocs(userId: number) {
  const allDocs = await prisma.documents.findMany({
    where: { userId: userId },
  });
  return allDocs;
}

export async function getDocById(docId: number) {
  const uniqueDoc = await prisma.documents.findUnique({
    where: { id: docId },
  });
  return uniqueDoc;
}

export async function deleteDocById(docId: number) {
  await prisma.documents.delete({
    where: { id: docId },
  });
}
