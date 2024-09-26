import { InputJsonValue } from "../../types";

export type RatingUpdateInput = {
  anonymity?: boolean | null;
  comments?: string | null;
  ratedEntityType?: "Option1" | null;
  ratedProperty?: string | null;
  ratedRole?: string | null;
  ratedService?: string | null;
  ratedUser?: string | null;
  rater?: string | null;
  raterRole?: string | null;
  ratingCategories?: InputJsonValue;
  ratingDate?: Date | null;
  ratingScore?: number | null;
  visibility?: "Option1" | null;
};
