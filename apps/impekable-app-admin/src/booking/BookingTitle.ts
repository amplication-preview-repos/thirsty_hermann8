import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "client";

export const BookingTitle = (record: TBooking): string => {
  return record.client?.toString() || String(record.id);
};
