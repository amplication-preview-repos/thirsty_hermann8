import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accepted_proposal" source="acceptedProposal" />
        <ReferenceField label="booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="documents" source="documents" />
        <TextField label="ID" source="id" />
        <ReferenceField label="office" source="office.id" reference="Office">
          <TextField source={OFFICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="proposals" source="proposals" />
        <TextField label="proposed_dates" source="proposedDates" />
        <TextField label="proposed_value" source="proposedValue" />
        <TextField label="reason" source="reason" />
        <ReferenceField label="report" source="report.id" reference="Report">
          <TextField source={REPORT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="request_date" source="requestDate" />
        <TextField label="request_type" source="requestType" />
        <TextField label="requester" source="requester" />
        <TextField label="responder" source="responder" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
