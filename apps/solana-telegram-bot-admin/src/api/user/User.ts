import { CsvExport } from "../csvExport/CsvExport";
import { Report } from "../report/Report";
import { JsonValue } from "type-fest";
import { TradeSettings } from "../tradeSettings/TradeSettings";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  csvExports?: Array<CsvExport>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reports?: Array<Report>;
  roles: JsonValue;
  telegramId: string | null;
  tradeSettingsItems?: Array<TradeSettings>;
  updatedAt: Date;
  username: string;
  walletBalance: number | null;
  wallets?: Array<Wallet>;
};
