import { CsvExport } from "../csvExport/CsvExport";
import { TradeOrder } from "../tradeOrder/TradeOrder";
import { User } from "../user/User";

export type Wallet = {
  createdAt: Date;
  csvExports?: Array<CsvExport>;
  id: string;
  privateKey: string | null;
  publicKey: string | null;
  tradeOrders?: Array<TradeOrder>;
  updatedAt: Date;
  user?: User | null;
};
