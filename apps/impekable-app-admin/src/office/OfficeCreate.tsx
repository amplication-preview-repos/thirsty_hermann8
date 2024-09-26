import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { ReportTitle } from "../report/ReportTitle";
import { RequestTitle } from "../request/RequestTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const OfficeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="bookings" reference="Booking">
          <SelectArrayInput
            optionText={BookingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <NumberInput
          step={1}
          label="current_bookings"
          source="currentBookings"
        />
        <TextInput label="franchisee" source="franchisee" />
        <TextInput label="location" source="location" />
        <NumberInput
          step={1}
          label="max_booking_capacity"
          source="maxBookingCapacity"
        />
        <div />
        <div />
        <ReferenceArrayInput source="reports" reference="Report">
          <SelectArrayInput
            optionText={ReportTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="requests" reference="Request">
          <SelectArrayInput
            optionText={RequestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="services" reference="Service">
          <SelectArrayInput
            optionText={ServiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
      </SimpleForm>
    </Create>
  );
};
