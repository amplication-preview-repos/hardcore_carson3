import { TradeOrderUpdateManyWithoutTokensInput } from "./TradeOrderUpdateManyWithoutTokensInput";

export type TokenUpdateInput = {
  decimals?: number | null;
  name?: string | null;
  symbolField?: string | null;
  tradeOrders?: TradeOrderUpdateManyWithoutTokensInput;
};
