import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  availability?: InputJsonValue;
  billingInformation?: InputJsonValue;
  certifications?: InputJsonValue;
  city?: string | null;
  email?: string | null;
  firstName?: string | null;
  identityDocument?: string | null;
  lastAccessDate?: Date | null;
  lastName?: string | null;
  password?: string | null;
  paymentMethods?: InputJsonValue;
  phoneNumber?: string | null;
  preferences?: InputJsonValue;
  registrationDate?: Date | null;
  role?: "Option1" | null;
  status?: "Option1" | null;
  teamMemberships?: InputJsonValue;
  walletBalance?: number | null;
  walletLastUpdate?: Date | null;
};
