import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { SERVICETYPE_TITLE_FIELD } from "../serviceType/ServiceTypeTitle";

export const ServiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Services"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
