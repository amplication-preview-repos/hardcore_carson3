import { CsvExportUpdateManyWithoutWalletsInput } from "./CsvExportUpdateManyWithoutWalletsInput";
import { TradeOrderUpdateManyWithoutWalletsInput } from "./TradeOrderUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  csvExports?: CsvExportUpdateManyWithoutWalletsInput;
  privateKey?: string | null;
  publicKey?: string | null;
  tradeOrders?: TradeOrderUpdateManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
