import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="address" source="address" />
        <ReferenceArrayInput source="bookings" reference="Booking">
          <SelectArrayInput
            optionText={BookingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput
          label="cancellation_policy"
          multiline
          source="cancellationPolicy"
        />
        <TextInput label="emergency_contact" source="emergencyContact" />
        <NumberInput step={1} label="guest_capacity" source="guestCapacity" />
        <TextInput label="house_rules" multiline source="houseRules" />
        <TextInput
          label="inventory_instructions"
          multiline
          source="inventoryInstructions"
        />
        <TextInput label="laundry_agreement" source="laundryAgreement" />
        <NumberInput
          step={1}
          label="number_of_bathrooms"
          source="numberOfBathrooms"
        />
        <NumberInput
          step={1}
          label="number_of_bedrooms"
          source="numberOfBedrooms"
        />
        <TextInput label="principal_service" source="principalService" />
        <BooleanInput label="products_reposition" source="productsReposition" />
        <TextInput label="property_name" source="propertyName" />
        <SelectInput
          source="propertyType"
          label="property_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="qr_code" source="qrCode" />
        <ReferenceArrayInput source="reports" reference="Report">
          <SelectArrayInput
            optionText={ReportTitle}
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
        <TextInput
          label="special_instructions"
          multiline
          source="specialInstructions"
        />
        <NumberInput step={1} label="square_meters" source="squareMeters" />
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
