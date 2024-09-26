import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type OfficeWhereInput = {
  bookings?: BookingListRelationFilter;
  contactInformation?: JsonFilter;
  currentBookings?: IntNullableFilter;
  franchisee?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  maxBookingCapacity?: IntNullableFilter;
  operatingHours?: JsonFilter;
  operationManagersIds?: JsonFilter;
  reports?: ReportListRelationFilter;
  requests?: RequestListRelationFilter;
  services?: ServiceListRelationFilter;
  status?: "Option1";
  teamIds?: JsonFilter;
};
