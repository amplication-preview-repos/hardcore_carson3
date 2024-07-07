import { SortOrder } from "../../util/SortOrder";

export type CsvExportOrderByInput = {
  createdAt?: SortOrder;
  generatedAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  walletId?: SortOrder;
};
