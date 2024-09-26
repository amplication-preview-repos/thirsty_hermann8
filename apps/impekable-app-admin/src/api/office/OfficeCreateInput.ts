import { BookingCreateNestedManyWithoutOfficesInput } from "./BookingCreateNestedManyWithoutOfficesInput";
import { InputJsonValue } from "../../types";
import { ReportCreateNestedManyWithoutOfficesInput } from "./ReportCreateNestedManyWithoutOfficesInput";
import { RequestCreateNestedManyWithoutOfficesInput } from "./RequestCreateNestedManyWithoutOfficesInput";
import { ServiceCreateNestedManyWithoutOfficesInput } from "./ServiceCreateNestedManyWithoutOfficesInput";

export type OfficeCreateInput = {
  bookings?: BookingCreateNestedManyWithoutOfficesInput;
  contactInformation?: InputJsonValue;
  currentBookings?: number | null;
  franchisee?: string | null;
  location?: string | null;
  maxBookingCapacity?: number | null;
  operatingHours?: InputJsonValue;
  operationManagersIds?: InputJsonValue;
  reports?: ReportCreateNestedManyWithoutOfficesInput;
  requests?: RequestCreateNestedManyWithoutOfficesInput;
  services?: ServiceCreateNestedManyWithoutOfficesInput;
  status?: "Option1" | null;
  teamIds?: InputJsonValue;
};
