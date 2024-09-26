import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  anonymity?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ratedEntityType?: SortOrder;
  ratedProperty?: SortOrder;
  ratedRole?: SortOrder;
  ratedService?: SortOrder;
  ratedUser?: SortOrder;
  rater?: SortOrder;
  raterRole?: SortOrder;
  ratingCategories?: SortOrder;
  ratingDate?: SortOrder;
  ratingScore?: SortOrder;
  updatedAt?: SortOrder;
  visibility?: SortOrder;
};
