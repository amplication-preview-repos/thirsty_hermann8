import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OfficeTitle } from "../office/OfficeTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { ReportTitle } from "../report/ReportTitle";
import { RequestTitle } from "../request/RequestTitle";
import { ServiceTitle } from "../service/ServiceTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="additional_information"
          multiline
          source="additionalInformation"
        />
        <div />
        <TextInput label="booking_notes" multiline source="bookingNotes" />
        <NumberInput label="booking_price" source="bookingPrice" />
        <SelectInput
          source="bookingSource"
          label="booking_source"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="bookingStatus"
          label="booking_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="check_in_datetime" source="checkInDatetime" />
        <DateTimeInput label="check_out_datetime" source="checkOutDatetime" />
        <TextInput label="client" source="client" />
        <NumberInput
          step={1}
          label="number_of_guests"
          source="numberOfGuests"
        />
        <ReferenceInput source="office.id" reference="Office" label="office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <TextInput label="platform_booking_id" source="platformBookingId" />
        <NumberInput
          label="platform_commissions"
          source="platformCommissions"
        />
        <TextInput label="platform_source" source="platformSource" />
        <TextInput label="principal_service" source="principalService" />
        <BooleanInput label="products_reposition" source="productsReposition" />
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
          source="synchronizationStatus"
          label="synchronization_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
