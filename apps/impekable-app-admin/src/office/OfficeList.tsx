import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OfficeList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Offices"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contact_information" source="contactInformation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="current_bookings" source="currentBookings" />
        <TextField label="franchisee" source="franchisee" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="max_booking_capacity" source="maxBookingCapacity" />
        <TextField label="operating_hours" source="operatingHours" />
        <TextField
          label="operation_managers_ids"
          source="operationManagersIds"
        />
        <TextField label="status" source="status" />
        <TextField label="team_ids" source="teamIds" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
