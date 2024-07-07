import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradeOrderService } from "./tradeOrder.service";
import { TradeOrderControllerBase } from "./base/tradeOrder.controller.base";

@swagger.ApiTags("tradeOrders")
@common.Controller("tradeOrders")
export class TradeOrderController extends TradeOrderControllerBase {
  constructor(protected readonly service: TradeOrderService) {
    super(service);
  }
}
