import { JsonValue } from "type-fest";
import { Booking } from "../booking/Booking";
import { Office } from "../office/Office";
import { Report } from "../report/Report";

export type Request = {
  acceptedProposal: JsonValue;
  booking?: Booking | null;
  createdAt: Date;
  documents: JsonValue;
  id: string;
  office?: Office | null;
  proposals: JsonValue;
  proposedDates: JsonValue;
  proposedValue: number | null;
  reason: string | null;
  report?: Report | null;
  requestDate: Date | null;
  requestType?: "Option1" | null;
  requester: string | null;
  responder: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
