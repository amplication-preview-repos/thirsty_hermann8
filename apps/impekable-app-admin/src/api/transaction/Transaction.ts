import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";

export type Transaction = {
  amount: number | null;
  booking?: Booking | null;
  createdAt: Date;
  description: string | null;
  id: string;
  paymentDetails: JsonValue;
  paymentMethod?: "Option1" | null;
  postBalance: number | null;
  previousBalance: number | null;
  receiverUser: string | null;
  senderUser: string | null;
  status?: "Option1" | null;
  transactionDate: Date | null;
  transactionType?: "Option1" | null;
  updatedAt: Date;
};
