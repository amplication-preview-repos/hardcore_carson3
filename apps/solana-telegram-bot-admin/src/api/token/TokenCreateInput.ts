import { TradeOrderCreateNestedManyWithoutTokensInput } from "./TradeOrderCreateNestedManyWithoutTokensInput";

export type TokenCreateInput = {
  decimals?: number | null;
  name?: string | null;
  symbolField?: string | null;
  tradeOrders?: TradeOrderCreateNestedManyWithoutTokensInput;
};
