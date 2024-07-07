import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TradeOrderCreateInput = {
  amount?: number | null;
  jitoFee?: number | null;
  price?: number | null;
  priorityFee?: number | null;
  slippage?: number | null;
  status?: string | null;
  token?: TokenWhereUniqueInput | null;
  typeField?: string | null;
  wallet?: WalletWhereUniqueInput | null;
};
