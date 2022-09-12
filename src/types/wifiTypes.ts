interface IWifi {
  id: number;
  title: string;
  network: string;
  password: string;
  userId: number;
}

type CreateWifi = Omit<IWifi, "id">;
type VerifyWifi = Omit<IWifi, "id" | "userId">;
export { IWifi, CreateWifi, VerifyWifi };
