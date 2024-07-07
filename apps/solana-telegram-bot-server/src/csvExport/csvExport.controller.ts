import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CsvExportService } from "./csvExport.service";
import { CsvExportControllerBase } from "./base/csvExport.controller.base";

@swagger.ApiTags("csvExports")
@common.Controller("csvExports")
export class CsvExportController extends CsvExportControllerBase {
  constructor(protected readonly service: CsvExportService) {
    super(service);
  }
}
