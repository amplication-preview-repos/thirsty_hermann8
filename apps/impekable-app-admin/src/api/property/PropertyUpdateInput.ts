import { InputJsonValue } from "../../types";
import { BookingUpdateManyWithoutPropertiesInput } from "./BookingUpdateManyWithoutPropertiesInput";
import { ReportUpdateManyWithoutPropertiesInput } from "./ReportUpdateManyWithoutPropertiesInput";
import { ServiceUpdateManyWithoutPropertiesInput } from "./ServiceUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  additionalServices?: InputJsonValue;
  address?: string | null;
  bookings?: BookingUpdateManyWithoutPropertiesInput;
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
  reports?: ReportUpdateManyWithoutPropertiesInput;
  services?: ServiceUpdateManyWithoutPropertiesInput;
  specialInstructions?: string | null;
  squareMeters?: number | null;
  status?: "Option1" | null;
};
