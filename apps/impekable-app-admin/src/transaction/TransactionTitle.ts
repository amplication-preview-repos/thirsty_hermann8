import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "receiverUser";

export const TransactionTitle = (record: TTransaction): string => {
  return record.receiverUser?.toString() || String(record.id);
};
