import { Module } from "@nestjs/common";
import { TradeOrderModuleBase } from "./base/tradeOrder.module.base";
import { TradeOrderService } from "./tradeOrder.service";
import { TradeOrderController } from "./tradeOrder.controller";
import { TradeOrderResolver } from "./tradeOrder.resolver";

@Module({
  imports: [TradeOrderModuleBase],
  controllers: [TradeOrderController],
  providers: [TradeOrderService, TradeOrderResolver],
  exports: [TradeOrderService],
})
export class TradeOrderModule {}
