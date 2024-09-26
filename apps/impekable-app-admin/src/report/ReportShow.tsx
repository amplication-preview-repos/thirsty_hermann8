import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { REPORT_TITLE_FIELD } from "./ReportTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="assigned_to" source="assignedTo" />
        <TextField label="author" source="author" />
        <ReferenceField label="booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="office" source="office.id" reference="Office">
          <TextField source={OFFICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="photos" source="photos" />
        <TextField label="priority" source="priority" />
        <ReferenceField
          label="property"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="report_datetime" source="reportDatetime" />
        <TextField label="report_name" source="reportName" />
        <TextField label="report_status" source="reportStatus" />
        <TextField label="report_type" source="reportType" />
        <TextField label="resolution_comments" source="resolutionComments" />
        <TextField label="resolution_date" source="resolutionDate" />
        <ReferenceField label="service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Request"
          target="reportId"
          label="Requests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="accepted_proposal" source="acceptedProposal" />
            <ReferenceField
              label="booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="documents" source="documents" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="proposals" source="proposals" />
            <TextField label="proposed_dates" source="proposedDates" />
            <TextField label="proposed_value" source="proposedValue" />
            <TextField label="reason" source="reason" />
            <ReferenceField
              label="report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="request_date" source="requestDate" />
            <TextField label="request_type" source="requestType" />
            <TextField label="requester" source="requester" />
            <TextField label="responder" source="responder" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
