import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  assignedTo?: SortOrder;
  author?: SortOrder;
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  officeId?: SortOrder;
  photos?: SortOrder;
  priority?: SortOrder;
  propertyId?: SortOrder;
  reportDatetime?: SortOrder;
  reportName?: SortOrder;
  reportStatus?: SortOrder;
  reportType?: SortOrder;
  resolutionComments?: SortOrder;
  resolutionDate?: SortOrder;
  serviceId?: SortOrder;
  updatedAt?: SortOrder;
};
