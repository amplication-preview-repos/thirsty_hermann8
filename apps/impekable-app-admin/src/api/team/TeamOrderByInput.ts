import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  creator?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  objectives?: SortOrder;
  status?: SortOrder;
  teamName?: SortOrder;
  teamType?: SortOrder;
  updatedAt?: SortOrder;
};
