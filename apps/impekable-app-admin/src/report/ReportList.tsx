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
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const ReportList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Reports"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
