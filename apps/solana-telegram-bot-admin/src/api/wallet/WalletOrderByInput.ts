import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  privateKey?: SortOrder;
  publicKey?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
