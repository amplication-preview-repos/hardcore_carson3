import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradeSettingsServiceBase } from "./base/tradeSettings.service.base";

@Injectable()
export class TradeSettingsService extends TradeSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
