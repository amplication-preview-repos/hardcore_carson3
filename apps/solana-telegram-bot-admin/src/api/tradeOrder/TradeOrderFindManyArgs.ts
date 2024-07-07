import { TradeOrderWhereInput } from "./TradeOrderWhereInput";
import { TradeOrderOrderByInput } from "./TradeOrderOrderByInput";

export type TradeOrderFindManyArgs = {
  where?: TradeOrderWhereInput;
  orderBy?: Array<TradeOrderOrderByInput>;
  skip?: number;
  take?: number;
};
