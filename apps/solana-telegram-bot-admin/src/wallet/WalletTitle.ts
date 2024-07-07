import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "privateKey";

export const WalletTitle = (record: TWallet): string => {
  return record.privateKey?.toString() || String(record.id);
};
