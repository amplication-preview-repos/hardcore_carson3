import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TradeOrderWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  jitoFee?: FloatNullableFilter;
  price?: FloatNullableFilter;
  priorityFee?: FloatNullableFilter;
  slippage?: FloatNullableFilter;
  status?: StringNullableFilter;
  token?: TokenWhereUniqueInput;
  typeField?: StringNullableFilter;
  wallet?: WalletWhereUniqueInput;
};
