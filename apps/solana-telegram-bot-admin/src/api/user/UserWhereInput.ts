import { CsvExportListRelationFilter } from "../csvExport/CsvExportListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { TradeSettingsListRelationFilter } from "../tradeSettings/TradeSettingsListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  csvExports?: CsvExportListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  reports?: ReportListRelationFilter;
  telegramId?: StringNullableFilter;
  tradeSettingsItems?: TradeSettingsListRelationFilter;
  username?: StringFilter;
  walletBalance?: FloatNullableFilter;
  wallets?: WalletListRelationFilter;
};
