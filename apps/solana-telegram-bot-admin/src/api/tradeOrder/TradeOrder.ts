import { Token } from "../token/Token";
import { Wallet } from "../wallet/Wallet";

export type TradeOrder = {
  amount: number | null;
  createdAt: Date;
  id: string;
  jitoFee: number | null;
  price: number | null;
  priorityFee: number | null;
  slippage: number | null;
  status: string | null;
  token?: Token | null;
  typeField: string | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
