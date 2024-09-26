import { SortOrder } from "../../util/SortOrder";

export type ServiceTypeOrderByInput = {
  additionalServices?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isPrincipal?: SortOrder;
  name?: SortOrder;
  numberOfBathrooms?: SortOrder;
  numberOfBedrooms?: SortOrder;
  photos?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
