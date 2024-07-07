import { TradeOrder as TTradeOrder } from "../api/tradeOrder/TradeOrder";

export const TRADEORDER_TITLE_FIELD = "status";

export const TradeOrderTitle = (record: TTradeOrder): string => {
  return record.status?.toString() || String(record.id);
};
