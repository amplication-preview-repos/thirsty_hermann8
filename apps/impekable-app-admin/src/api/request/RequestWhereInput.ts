import { JsonFilter } from "../../util/JsonFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RequestWhereInput = {
  acceptedProposal?: JsonFilter;
  booking?: BookingWhereUniqueInput;
  documents?: JsonFilter;
  id?: StringFilter;
  office?: OfficeWhereUniqueInput;
  proposals?: JsonFilter;
  proposedDates?: JsonFilter;
  proposedValue?: FloatNullableFilter;
  reason?: StringNullableFilter;
  report?: ReportWhereUniqueInput;
  requestDate?: DateTimeNullableFilter;
  requestType?: "Option1";
  requester?: StringNullableFilter;
  responder?: StringNullableFilter;
  status?: "Option1";
};
