import * as graphql from "@nestjs/graphql";
import { TradeOrderResolverBase } from "./base/tradeOrder.resolver.base";
import { TradeOrder } from "./base/TradeOrder";
import { TradeOrderService } from "./tradeOrder.service";

@graphql.Resolver(() => TradeOrder)
export class TradeOrderResolver extends TradeOrderResolverBase {
  constructor(protected readonly service: TradeOrderService) {
    super(service);
  }
}
