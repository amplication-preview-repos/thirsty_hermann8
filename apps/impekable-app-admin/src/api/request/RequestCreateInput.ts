import { InputJsonValue } from "../../types";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type RequestCreateInput = {
  acceptedProposal?: InputJsonValue;
  booking?: BookingWhereUniqueInput | null;
  documents?: InputJsonValue;
  office?: OfficeWhereUniqueInput | null;
  proposals?: InputJsonValue;
  proposedDates?: InputJsonValue;
  proposedValue?: number | null;
  reason?: string | null;
  report?: ReportWhereUniqueInput | null;
  requestDate?: Date | null;
  requestType?: "Option1" | null;
  requester?: string | null;
  responder?: string | null;
  status?: "Option1" | null;
};
