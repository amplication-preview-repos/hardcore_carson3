import { User } from "../user/User";

export type Report = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
