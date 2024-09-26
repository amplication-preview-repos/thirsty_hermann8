import { SortOrder } from "../../util/SortOrder";

export type OfficeOrderByInput = {
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  currentBookings?: SortOrder;
  franchisee?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  maxBookingCapacity?: SortOrder;
  operatingHours?: SortOrder;
  operationManagersIds?: SortOrder;
  status?: SortOrder;
  teamIds?: SortOrder;
  updatedAt?: SortOrder;
};
