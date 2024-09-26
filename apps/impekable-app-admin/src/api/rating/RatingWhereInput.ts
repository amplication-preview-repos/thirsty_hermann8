import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RatingWhereInput = {
  anonymity?: BooleanNullableFilter;
  comments?: StringNullableFilter;
  id?: StringFilter;
  ratedEntityType?: "Option1";
  ratedProperty?: StringNullableFilter;
  ratedRole?: StringNullableFilter;
  ratedService?: StringNullableFilter;
  ratedUser?: StringNullableFilter;
  rater?: StringNullableFilter;
  raterRole?: StringNullableFilter;
  ratingCategories?: JsonFilter;
  ratingDate?: DateTimeNullableFilter;
  ratingScore?: FloatNullableFilter;
  visibility?: "Option1";
};
