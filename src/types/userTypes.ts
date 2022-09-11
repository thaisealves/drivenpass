interface IUser {
  id: number;
  email: string;
  password: string;
}

type CreateUser = Omit<IUser, "id">;

export { IUser, CreateUser };
