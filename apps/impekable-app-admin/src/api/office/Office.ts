import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";
import { Report } from "../report/Report";
import { Request } from "../request/Request";
import { Service } from "../service/Service";

export type Office = {
  bookings?: Array<Booking>;
  contactInformation: JsonValue;
  createdAt: Date;
  currentBookings: number | null;
  franchisee: string | null;
  id: string;
  location: string | null;
  maxBookingCapacity: number | null;
  operatingHours: JsonValue;
  operationManagersIds: JsonValue;
  reports?: Array<Report>;
  requests?: Array<Request>;
  services?: Array<Service>;
  status?: "Option1" | null;
  teamIds: JsonValue;
  updatedAt: Date;
};
