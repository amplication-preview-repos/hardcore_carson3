import { SortOrder } from "../../util/SortOrder";

export type TradeOrderOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jitoFee?: SortOrder;
  price?: SortOrder;
  priorityFee?: SortOrder;
  slippage?: SortOrder;
  status?: SortOrder;
  tokenId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  walletId?: SortOrder;
};
