import { TradeOrder } from "../tradeOrder/TradeOrder";

export type Token = {
  createdAt: Date;
  decimals: number | null;
  id: string;
  name: string | null;
  symbolField: string | null;
  tradeOrders?: Array<TradeOrder>;
  updatedAt: Date;
};
