import * as graphql from "@nestjs/graphql";
import { TradeSettingsResolverBase } from "./base/tradeSettings.resolver.base";
import { TradeSettings } from "./base/TradeSettings";
import { TradeSettingsService } from "./tradeSettings.service";

@graphql.Resolver(() => TradeSettings)
export class TradeSettingsResolver extends TradeSettingsResolverBase {
  constructor(protected readonly service: TradeSettingsService) {
    super(service);
  }
}
