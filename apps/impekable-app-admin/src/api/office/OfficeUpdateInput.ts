import { BookingUpdateManyWithoutOfficesInput } from "./BookingUpdateManyWithoutOfficesInput";
import { InputJsonValue } from "../../types";
import { ReportUpdateManyWithoutOfficesInput } from "./ReportUpdateManyWithoutOfficesInput";
import { RequestUpdateManyWithoutOfficesInput } from "./RequestUpdateManyWithoutOfficesInput";
import { ServiceUpdateManyWithoutOfficesInput } from "./ServiceUpdateManyWithoutOfficesInput";

export type OfficeUpdateInput = {
  bookings?: BookingUpdateManyWithoutOfficesInput;
  contactInformation?: InputJsonValue;
  currentBookings?: number | null;
  franchisee?: string | null;
  location?: string | null;
  maxBookingCapacity?: number | null;
  operatingHours?: InputJsonValue;
  operationManagersIds?: InputJsonValue;
  reports?: ReportUpdateManyWithoutOfficesInput;
  requests?: RequestUpdateManyWithoutOfficesInput;
  services?: ServiceUpdateManyWithoutOfficesInput;
  status?: "Option1" | null;
  teamIds?: InputJsonValue;
};
