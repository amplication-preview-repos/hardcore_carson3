import { Module } from "@nestjs/common";
import { CsvExportModuleBase } from "./base/csvExport.module.base";
import { CsvExportService } from "./csvExport.service";
import { CsvExportController } from "./csvExport.controller";
import { CsvExportResolver } from "./csvExport.resolver";

@Module({
  imports: [CsvExportModuleBase],
  controllers: [CsvExportController],
  providers: [CsvExportService, CsvExportResolver],
  exports: [CsvExportService],
})
export class CsvExportModule {}
