import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type ServiceTypeWhereInput = {
  additionalServices?: BooleanNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isPrincipal?: BooleanNullableFilter;
  name?: StringNullableFilter;
  numberOfBathrooms?: IntNullableFilter;
  numberOfBedrooms?: IntNullableFilter;
  photos?: JsonFilter;
  price?: FloatNullableFilter;
  services?: ServiceListRelationFilter;
};
