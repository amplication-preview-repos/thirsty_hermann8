import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  categories?: SortOrder;
  contentDetail?: SortOrder;
  contentType?: SortOrder;
  createdAt?: SortOrder;
  creator?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  publicationDate?: SortOrder;
  recipients?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updateDate?: SortOrder;
  updatedAt?: SortOrder;
  visibility?: SortOrder;
};
