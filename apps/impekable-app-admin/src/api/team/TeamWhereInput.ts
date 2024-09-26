import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeamWhereInput = {
  creationDate?: DateTimeNullableFilter;
  creator?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  objectives?: StringNullableFilter;
  status?: "Option1";
  teamName?: StringNullableFilter;
  teamType?: "Option1";
};
