import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { OfficeTitle } from "../office/OfficeTitle";
import { ReportTitle } from "../report/ReportTitle";

export const RequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="booking.id" reference="Booking" label="booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput source="office.id" reference="Office" label="office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <div />
        <div />
        <NumberInput label="proposed_value" source="proposedValue" />
        <TextInput label="reason" multiline source="reason" />
        <ReferenceInput source="report.id" reference="Report" label="report">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <DateTimeInput label="request_date" source="requestDate" />
        <SelectInput
          source="requestType"
          label="request_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="requester" source="requester" />
        <TextInput label="responder" source="responder" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
