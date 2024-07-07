import { CsvExportWhereInput } from "./CsvExportWhereInput";
import { CsvExportOrderByInput } from "./CsvExportOrderByInput";

export type CsvExportFindManyArgs = {
  where?: CsvExportWhereInput;
  orderBy?: Array<CsvExportOrderByInput>;
  skip?: number;
  take?: number;
};
