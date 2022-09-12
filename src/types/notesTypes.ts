interface INote {
  id: number;
  title: string;
  note: string;
  userId: number;
}

type CreateNote = Omit<INote, "id">;
type VerifyNote = Omit<INote, "id" | "userId">;
export { INote, CreateNote, VerifyNote };
