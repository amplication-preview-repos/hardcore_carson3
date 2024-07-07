import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeSettingsCreateInput = {
  jitoTip?: number | null;
  priorityFee?: number | null;
  slippage?: number | null;
  user?: UserWhereUniqueInput | null;
};
