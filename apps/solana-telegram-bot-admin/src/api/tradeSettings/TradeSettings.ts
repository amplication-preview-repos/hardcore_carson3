import { User } from "../user/User";

export type TradeSettings = {
  createdAt: Date;
  id: string;
  jitoTip: number | null;
  priorityFee: number | null;
  slippage: number | null;
  updatedAt: Date;
  user?: User | null;
};
