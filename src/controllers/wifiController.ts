import { Request, Response } from "express";
import {
  deleteOneWifi,
  getWifisService,
  getOneWifi,
  newWifiService,
} from "../services/wifiService";
import { CreateWifi } from "../types/wifiTypes";
export async function createWifi(req: Request, res: Response) {
  const { userId } = res.locals;
  const newWifi: CreateWifi = {
    ...req.body,
    userId,
  };

  await newWifiService(newWifi);
  res.sendStatus(201);
}

export async function getAllWifis(req: Request, res: Response) {
  const { userId } = res.locals;

  const allWifis = await getWifisService(userId);
  res.status(200).send(allWifis);
}

export async function getUniqueWifi(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const uniqueWifi = await getOneWifi(Number(id), userId);
  res.status(200).send(uniqueWifi);
}

export async function deleteWifi(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await deleteOneWifi(Number(id), userId);
  res.sendStatus(204);
}
