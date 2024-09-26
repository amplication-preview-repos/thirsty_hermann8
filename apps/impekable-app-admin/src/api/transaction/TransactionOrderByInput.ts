import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  paymentDetails?: SortOrder;
  paymentMethod?: SortOrder;
  postBalance?: SortOrder;
  previousBalance?: SortOrder;
  receiverUser?: SortOrder;
  senderUser?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
