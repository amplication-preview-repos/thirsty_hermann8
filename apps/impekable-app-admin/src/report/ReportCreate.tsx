import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { OfficeTitle } from "../office/OfficeTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { RequestTitle } from "../request/RequestTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assigned_to" source="assignedTo" />
        <TextInput label="author" source="author" />
        <ReferenceInput source="booking.id" reference="Booking" label="booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="office.id" reference="Office" label="office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <div />
        <SelectInput
          source="priority"
          label="priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <DateTimeInput label="report_datetime" source="reportDatetime" />
        <TextInput label="report_name" source="reportName" />
        <SelectInput
          source="reportStatus"
          label="report_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="reportType"
          label="report_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput source="requests" reference="Request">
          <SelectArrayInput
            optionText={RequestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput
          label="resolution_comments"
          multiline
          source="resolutionComments"
        />
        <DateTimeInput label="resolution_date" source="resolutionDate" />
        <ReferenceInput source="service.id" reference="Service" label="service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
