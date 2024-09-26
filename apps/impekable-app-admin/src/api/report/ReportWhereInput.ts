import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ReportWhereInput = {
  assignedTo?: StringNullableFilter;
  author?: StringNullableFilter;
  booking?: BookingWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  office?: OfficeWhereUniqueInput;
  photos?: JsonFilter;
  priority?: "Option1";
  property?: PropertyWhereUniqueInput;
  reportDatetime?: DateTimeNullableFilter;
  reportName?: StringNullableFilter;
  reportStatus?: "Option1";
  reportType?: "Option1";
  requests?: RequestListRelationFilter;
  resolutionComments?: StringNullableFilter;
  resolutionDate?: DateTimeNullableFilter;
  service?: ServiceWhereUniqueInput;
};
