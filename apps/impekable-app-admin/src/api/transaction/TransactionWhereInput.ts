import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  booking?: BookingWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  paymentDetails?: JsonFilter;
  paymentMethod?: "Option1";
  postBalance?: FloatNullableFilter;
  previousBalance?: FloatNullableFilter;
  receiverUser?: StringNullableFilter;
  senderUser?: StringNullableFilter;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
  transactionType?: "Option1";
};
