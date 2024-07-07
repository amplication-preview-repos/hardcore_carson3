import { TradeSettings as TTradeSettings } from "../api/tradeSettings/TradeSettings";

export const TRADESETTINGS_TITLE_FIELD = "id";

export const TradeSettingsTitle = (record: TTradeSettings): string => {
  return record.id?.toString() || String(record.id);
};
