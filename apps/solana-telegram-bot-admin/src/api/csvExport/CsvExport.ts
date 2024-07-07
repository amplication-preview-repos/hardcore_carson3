import { User } from "../user/User";
import { Wallet } from "../wallet/Wallet";

export type CsvExport = {
  createdAt: Date;
  generatedAt: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  wallet?: Wallet | null;
};
