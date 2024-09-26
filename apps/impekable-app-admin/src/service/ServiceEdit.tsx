import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { OfficeTitle } from "../office/OfficeTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ServiceTypeTitle } from "../serviceType/ServiceTypeTitle";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="base_price" source="basePrice" />
        <ReferenceInput source="booking.id" reference="Booking" label="booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <div />
        <NumberInput label="estimated_duration" source="estimatedDuration" />
        <ReferenceInput source="office.id" reference="Office" label="office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="reports" reference="Report">
          <SelectArrayInput
            optionText={ReportTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="serviceType.id"
          reference="ServiceType"
          label="service_type"
        >
          <SelectInput optionText={ServiceTypeTitle} />
        </ReferenceInput>
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="supervisor" source="supervisor" />
        <TextInput label="task_form" multiline source="taskForm" />
      </SimpleForm>
    </Edit>
  );
};
