import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type CsvExportUpdateInput = {
  generatedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  wallet?: WalletWhereUniqueInput | null;
};
