import { CreateDoc } from "../types/docsTypes";
import {
  deleteDocById,
  getAllDocs,
  getDocById,
  insertDoc,
} from "../repositories/docsRepository";

export async function newDocService(createDoc: CreateDoc) {
  await insertDoc(createDoc);
}

export async function getDocsService(userId: number) {
  const allDocs = await getAllDocs(userId);
  return allDocs;
}

export async function getOneDoc(DocId: number, userId: number) {
  const uniqueDoc = await getDocById(DocId);
  if (!uniqueDoc) throw { code: "NotFound", message: "Doc doesn't exist" };
  verifyUserToDoc(userId, uniqueDoc.userId);

  return uniqueDoc;
}

export async function deleteOneDoc(DocId: number, userId: number) {
  const getDoc = await getDocById(DocId);
  if (!getDoc) {
    throw { code: "NotFound", message: "Doc doesn't exist" };
  }
  verifyUserToDoc(userId, getDoc.userId);
  await deleteDocById(DocId);
}

function verifyUserToDoc(userId: number, DocUserId: number) {
  if (DocUserId !== userId)
    throw {
      code: "Unauthorized",
      message: "This Doc doesn't belong to this user",
    };
}
