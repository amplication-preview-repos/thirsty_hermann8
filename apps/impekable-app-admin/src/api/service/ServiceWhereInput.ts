import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { ServiceTypeWhereUniqueInput } from "../serviceType/ServiceTypeWhereUniqueInput";

export type ServiceWhereInput = {
  basePrice?: FloatNullableFilter;
  booking?: BookingWhereUniqueInput;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  equipmentRequirements?: JsonFilter;
  estimatedDuration?: FloatNullableFilter;
  id?: StringFilter;
  office?: OfficeWhereUniqueInput;
  operators?: JsonFilter;
  property?: PropertyWhereUniqueInput;
  reports?: ReportListRelationFilter;
  serviceType?: ServiceTypeWhereUniqueInput;
  specialInstructions?: JsonFilter;
  status?: "Option1";
  supervisor?: StringNullableFilter;
  taskForm?: StringNullableFilter;
};
