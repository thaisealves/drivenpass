import { CreateWifi } from "../types/wifiTypes";
import dotenv from "dotenv";
import {
  deleteWifiById,
  getAllWifis,
  getWifiById,
  insertWifi,
} from "../repositories/wifiRepository";
import Cryptr from "cryptr";

dotenv.config();

export async function newWifiService(createWifi: CreateWifi) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  const encryptedPassword = cryptr.encrypt(createWifi.password);
  await insertWifi({
    ...createWifi,
    password: encryptedPassword,
  });
}

export async function getWifisService(userId: number) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  const allWifis = await getAllWifis(userId);
  const showWifis = allWifis.map((el) => {
    return {
      ...el,
      password: cryptr.decrypt(el.password),
    };
  });

  return showWifis;
}

export async function getOneWifi(WifiId: number, userId: number) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS as string);
  const uniqueWifi = await getWifiById(WifiId);
  if (!uniqueWifi) throw { code: "NotFound", message: "Wifi doesn't exist" };
  verifyUserToWifi(userId, uniqueWifi.userId);
  const showWifi = {
    ...uniqueWifi,
    password: cryptr.decrypt(uniqueWifi.password),
  };
  return showWifi;
}

export async function deleteOneWifi(WifiId: number, userId: number) {
  const getWifi = await getWifiById(WifiId);
  if (!getWifi) {
    throw { code: "NotFound", message: "Wifi doesn't exist" };
  }
  verifyUserToWifi(userId, getWifi.userId);
  await deleteWifiById(WifiId);
}

function verifyUserToWifi(userId: number, WifiUserId: number) {
  if (WifiUserId !== userId)
    throw {
      code: "Unauthorized",
      message: "This wifi record doesn't belong to this user",
    };
}
