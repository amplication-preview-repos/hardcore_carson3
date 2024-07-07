import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradeOrderServiceBase } from "./base/tradeOrder.service.base";

@Injectable()
export class TradeOrderService extends TradeOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
