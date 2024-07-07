import { CsvExportCreateNestedManyWithoutWalletsInput } from "./CsvExportCreateNestedManyWithoutWalletsInput";
import { TradeOrderCreateNestedManyWithoutWalletsInput } from "./TradeOrderCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  csvExports?: CsvExportCreateNestedManyWithoutWalletsInput;
  privateKey?: string | null;
  publicKey?: string | null;
  tradeOrders?: TradeOrderCreateNestedManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
