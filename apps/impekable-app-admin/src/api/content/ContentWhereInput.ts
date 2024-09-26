import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContentWhereInput = {
  categories?: JsonFilter;
  contentDetail?: StringNullableFilter;
  contentType?: "Option1";
  creator?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  publicationDate?: DateTimeNullableFilter;
  recipients?: JsonFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  updateDate?: DateTimeNullableFilter;
  visibility?: "Option1";
};
