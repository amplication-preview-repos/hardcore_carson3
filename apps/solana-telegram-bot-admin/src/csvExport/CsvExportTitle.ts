import { CsvExport as TCsvExport } from "../api/csvExport/CsvExport";

export const CSVEXPORT_TITLE_FIELD = "id";

export const CsvExportTitle = (record: TCsvExport): string => {
  return record.id?.toString() || String(record.id);
};
