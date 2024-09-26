import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { SERVICETYPE_TITLE_FIELD } from "./ServiceTypeTitle";

export const ServiceTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="additional_services" source="additionalServices" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_principal" source="isPrincipal" />
        <TextField label="name" source="name" />
        <TextField label="number_of_bathrooms" source="numberOfBathrooms" />
        <TextField label="number_of_bedrooms" source="numberOfBedrooms" />
        <TextField label="photos" source="photos" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Service"
          target="serviceTypeId"
          label="Services"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="base_price" source="basePrice" />
            <ReferenceField
              label="booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField
              label="equipment_requirements"
              source="equipmentRequirements"
            />
            <TextField label="estimated_duration" source="estimatedDuration" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="operators" source="operators" />
            <ReferenceField
              label="property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="service_type"
              source="servicetype.id"
              reference="ServiceType"
            >
              <TextField source={SERVICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="special_instructions"
              source="specialInstructions"
            />
            <TextField label="status" source="status" />
            <TextField label="supervisor" source="supervisor" />
            <TextField label="task_form" source="taskForm" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
