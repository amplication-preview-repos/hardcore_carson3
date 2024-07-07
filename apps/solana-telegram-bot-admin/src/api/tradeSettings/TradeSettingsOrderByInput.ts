import { SortOrder } from "../../util/SortOrder";

export type TradeSettingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jitoTip?: SortOrder;
  priorityFee?: SortOrder;
  slippage?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
