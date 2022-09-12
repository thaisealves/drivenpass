interface ICredential {
  id: number;
  url: string;
  username: string;
  password: string;
  title: string;
  userId: number;
}

type CreateCredential = Omit<ICredential, "id">;
type VerifyCredential = Omit<ICredential, "id"|"userId">;
export { ICredential, CreateCredential, VerifyCredential };
