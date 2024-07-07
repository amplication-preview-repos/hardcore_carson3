import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TradeOrderListRelationFilter } from "../tradeOrder/TradeOrderListRelationFilter";

export type TokenWhereInput = {
  decimals?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  symbolField?: StringNullableFilter;
  tradeOrders?: TradeOrderListRelationFilter;
};
