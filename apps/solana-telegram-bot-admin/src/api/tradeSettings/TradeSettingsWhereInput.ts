import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeSettingsWhereInput = {
  id?: StringFilter;
  jitoTip?: FloatNullableFilter;
  priorityFee?: FloatNullableFilter;
  slippage?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
