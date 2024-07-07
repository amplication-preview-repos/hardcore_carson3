import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeSettingsUpdateInput = {
  jitoTip?: number | null;
  priorityFee?: number | null;
  slippage?: number | null;
  user?: UserWhereUniqueInput | null;
};
