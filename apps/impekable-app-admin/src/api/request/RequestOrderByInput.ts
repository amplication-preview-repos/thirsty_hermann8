import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  acceptedProposal?: SortOrder;
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  documents?: SortOrder;
  id?: SortOrder;
  officeId?: SortOrder;
  proposals?: SortOrder;
  proposedDates?: SortOrder;
  proposedValue?: SortOrder;
  reason?: SortOrder;
  reportId?: SortOrder;
  requestDate?: SortOrder;
  requestType?: SortOrder;
  requester?: SortOrder;
  responder?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
