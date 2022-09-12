import { CreateWifi } from "../types/wifiTypes";
import { prisma } from "../utils/database";

export async function insertWifi(createWifi: CreateWifi) {
  await prisma.wifi.create({
    data: createWifi,
  });
}

export async function getAllWifis(userId: number) {
  const allWifis = await prisma.wifi.findMany({
    where: { userId: userId },
  });
  return allWifis;
}

export async function getWifiById(WifiId: number) {
  const uniqueWifi = await prisma.wifi.findUnique({
    where: { id: WifiId },
  });
  return uniqueWifi;
}

export async function deleteWifiById(WifiId: number) {
  await prisma.wifi.delete({
    where: { id: WifiId },
  });
}
