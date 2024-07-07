import { CsvExportListRelationFilter } from "../csvExport/CsvExportListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TradeOrderListRelationFilter } from "../tradeOrder/TradeOrderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  csvExports?: CsvExportListRelationFilter;
  id?: StringFilter;
  privateKey?: StringNullableFilter;
  publicKey?: StringNullableFilter;
  tradeOrders?: TradeOrderListRelationFilter;
  user?: UserWhereUniqueInput;
};
