import { CsvExportCreateNestedManyWithoutUsersInput } from "./CsvExportCreateNestedManyWithoutUsersInput";
import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TradeSettingsCreateNestedManyWithoutUsersInput } from "./TradeSettingsCreateNestedManyWithoutUsersInput";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  csvExports?: CsvExportCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  reports?: ReportCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  telegramId?: string | null;
  tradeSettingsItems?: TradeSettingsCreateNestedManyWithoutUsersInput;
  username: string;
  walletBalance?: number | null;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
