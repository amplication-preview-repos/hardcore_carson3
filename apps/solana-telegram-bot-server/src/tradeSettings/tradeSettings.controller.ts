import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradeSettingsService } from "./tradeSettings.service";
import { TradeSettingsControllerBase } from "./base/tradeSettings.controller.base";

@swagger.ApiTags("tradeSettings")
@common.Controller("tradeSettings")
export class TradeSettingsController extends TradeSettingsControllerBase {
  constructor(protected readonly service: TradeSettingsService) {
    super(service);
  }
}
