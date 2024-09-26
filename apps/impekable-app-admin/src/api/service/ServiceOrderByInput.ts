import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  basePrice?: SortOrder;
  bookingId?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  equipmentRequirements?: SortOrder;
  estimatedDuration?: SortOrder;
  id?: SortOrder;
  officeId?: SortOrder;
  operators?: SortOrder;
  propertyId?: SortOrder;
  serviceTypeId?: SortOrder;
  specialInstructions?: SortOrder;
  status?: SortOrder;
  supervisor?: SortOrder;
  taskForm?: SortOrder;
  updatedAt?: SortOrder;
};
