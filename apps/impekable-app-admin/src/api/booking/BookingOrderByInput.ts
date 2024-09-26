import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  additionalInformation?: SortOrder;
  additionalServices?: SortOrder;
  bookingNotes?: SortOrder;
  bookingPrice?: SortOrder;
  bookingSource?: SortOrder;
  bookingStatus?: SortOrder;
  checkInDatetime?: SortOrder;
  checkOutDatetime?: SortOrder;
  client?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  numberOfGuests?: SortOrder;
  officeId?: SortOrder;
  platformBookingId?: SortOrder;
  platformCommissions?: SortOrder;
  platformSource?: SortOrder;
  principalService?: SortOrder;
  productsReposition?: SortOrder;
  propertyId?: SortOrder;
  synchronizationStatus?: SortOrder;
  updatedAt?: SortOrder;
};
