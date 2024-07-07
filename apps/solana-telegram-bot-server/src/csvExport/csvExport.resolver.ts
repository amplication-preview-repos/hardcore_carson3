import * as graphql from "@nestjs/graphql";
import { CsvExportResolverBase } from "./base/csvExport.resolver.base";
import { CsvExport } from "./base/CsvExport";
import { CsvExportService } from "./csvExport.service";

@graphql.Resolver(() => CsvExport)
export class CsvExportResolver extends CsvExportResolverBase {
  constructor(protected readonly service: CsvExportService) {
    super(service);
  }
}
