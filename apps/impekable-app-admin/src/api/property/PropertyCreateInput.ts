import { InputJsonValue } from "../../types";
import { BookingCreateNestedManyWithoutPropertiesInput } from "./BookingCreateNestedManyWithoutPropertiesInput";
import { ReportCreateNestedManyWithoutPropertiesInput } from "./ReportCreateNestedManyWithoutPropertiesInput";
import { ServiceCreateNestedManyWithoutPropertiesInput } from "./ServiceCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  additionalServices?: InputJsonValue;
  address?: string | null;
  bookings?: BookingCreateNestedManyWithoutPropertiesInput;
  cancellationPolicy?: string | null;
  emergencyContact?: string | null;
  guestCapacity?: number | null;
  houseRules?: string | null;
  inventoryInstructions?: string | null;
  laundryAgreement?: string | null;
  numberOfBathrooms?: number | null;
  numberOfBedrooms?: number | null;
  principalService?: string | null;
  productsReposition?: boolean | null;
  propertyName?: string | null;
  propertyType?: "Option1" | null;
  qrCode?: string | null;
  reports?: ReportCreateNestedManyWithoutPropertiesInput;
  services?: ServiceCreateNestedManyWithoutPropertiesInput;
  specialInstructions?: string | null;
  squareMeters?: number | null;
  status?: "Option1" | null;
};
