import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TransactionUpdateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  description?: string | null;
  paymentDetails?: InputJsonValue;
  paymentMethod?: "Option1" | null;
  postBalance?: number | null;
  previousBalance?: number | null;
  receiverUser?: string | null;
  senderUser?: string | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  transactionType?: "Option1" | null;
};
