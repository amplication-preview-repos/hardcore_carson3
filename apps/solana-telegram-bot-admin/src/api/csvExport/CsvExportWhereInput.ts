import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type CsvExportWhereInput = {
  generatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  wallet?: WalletWhereUniqueInput;
};
