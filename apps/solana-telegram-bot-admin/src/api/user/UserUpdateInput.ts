import { CsvExportUpdateManyWithoutUsersInput } from "./CsvExportUpdateManyWithoutUsersInput";
import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TradeSettingsUpdateManyWithoutUsersInput } from "./TradeSettingsUpdateManyWithoutUsersInput";
import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  csvExports?: CsvExportUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reports?: ReportUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  telegramId?: string | null;
  tradeSettingsItems?: TradeSettingsUpdateManyWithoutUsersInput;
  username?: string;
  walletBalance?: number | null;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
