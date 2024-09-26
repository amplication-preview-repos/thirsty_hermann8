import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  availability?: JsonFilter;
  billingInformation?: JsonFilter;
  certifications?: JsonFilter;
  city?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  identityDocument?: StringNullableFilter;
  lastAccessDate?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  password?: StringNullableFilter;
  paymentMethods?: JsonFilter;
  phoneNumber?: StringNullableFilter;
  preferences?: JsonFilter;
  registrationDate?: DateTimeNullableFilter;
  role?: "Option1";
  status?: "Option1";
  teamMemberships?: JsonFilter;
  walletBalance?: FloatNullableFilter;
  walletLastUpdate?: DateTimeNullableFilter;
};
