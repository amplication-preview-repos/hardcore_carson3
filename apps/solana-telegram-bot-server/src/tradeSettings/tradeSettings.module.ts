import { Module } from "@nestjs/common";
import { TradeSettingsModuleBase } from "./base/tradeSettings.module.base";
import { TradeSettingsService } from "./tradeSettings.service";
import { TradeSettingsController } from "./tradeSettings.controller";
import { TradeSettingsResolver } from "./tradeSettings.resolver";

@Module({
  imports: [TradeSettingsModuleBase],
  controllers: [TradeSettingsController],
  providers: [TradeSettingsService, TradeSettingsResolver],
  exports: [TradeSettingsService],
})
export class TradeSettingsModule {}
