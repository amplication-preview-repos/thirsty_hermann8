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
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { SERVICE_TITLE_FIELD } from "./ServiceTitle";
import { SERVICETYPE_TITLE_FIELD } from "../serviceType/ServiceTypeTitle";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="base_price" source="basePrice" />
        <ReferenceField label="booking" source="booking.id" reference="Booking">
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
        <ReferenceField label="office" source="office.id" reference="Office">
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
        <TextField label="special_instructions" source="specialInstructions" />
        <TextField label="status" source="status" />
        <TextField label="supervisor" source="supervisor" />
        <TextField label="task_form" source="taskForm" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Report"
          target="serviceId"
          label="Reports"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="assigned_to" source="assignedTo" />
            <TextField label="author" source="author" />
            <ReferenceField
              label="booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="office"
              source="office.id"
              reference="Office"
            >
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
            <TextField
              label="resolution_comments"
              source="resolutionComments"
            />
            <TextField label="resolution_date" source="resolutionDate" />
            <ReferenceField
              label="service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
