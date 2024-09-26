import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  availability: JsonValue;
  billingInformation: JsonValue;
  certifications: JsonValue;
  city: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  identityDocument: string | null;
  lastAccessDate: Date | null;
  lastName: string | null;
  password: string | null;
  paymentMethods: JsonValue;
  phoneNumber: string | null;
  preferences: JsonValue;
  registrationDate: Date | null;
  role?: "Option1" | null;
  status?: "Option1" | null;
  teamMemberships: JsonValue;
  updatedAt: Date;
  walletBalance: number | null;
  walletLastUpdate: Date | null;
};
