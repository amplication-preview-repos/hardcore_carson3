import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CsvExportServiceBase } from "./base/csvExport.service.base";

@Injectable()
export class CsvExportService extends CsvExportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
