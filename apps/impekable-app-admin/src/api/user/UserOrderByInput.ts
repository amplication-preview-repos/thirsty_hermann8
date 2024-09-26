import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  availability?: SortOrder;
  billingInformation?: SortOrder;
  certifications?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  identityDocument?: SortOrder;
  lastAccessDate?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  paymentMethods?: SortOrder;
  phoneNumber?: SortOrder;
  preferences?: SortOrder;
  registrationDate?: SortOrder;
  role?: SortOrder;
  status?: SortOrder;
  teamMemberships?: SortOrder;
  updatedAt?: SortOrder;
  walletBalance?: SortOrder;
  walletLastUpdate?: SortOrder;
};
