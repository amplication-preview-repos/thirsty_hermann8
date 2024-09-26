import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="additional_information"
          source="additionalInformation"
        />
        <TextField label="additional_services" source="additionalServices" />
        <TextField label="booking_notes" source="bookingNotes" />
        <TextField label="booking_price" source="bookingPrice" />
        <TextField label="booking_source" source="bookingSource" />
        <TextField label="booking_status" source="bookingStatus" />
        <TextField label="check_in_datetime" source="checkInDatetime" />
        <TextField label="check_out_datetime" source="checkOutDatetime" />
        <TextField label="client" source="client" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="number_of_guests" source="numberOfGuests" />
        <ReferenceField label="office" source="office.id" reference="Office">
          <TextField source={OFFICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="platform_booking_id" source="platformBookingId" />
        <TextField label="platform_commissions" source="platformCommissions" />
        <TextField label="platform_source" source="platformSource" />
        <TextField label="principal_service" source="principalService" />
        <BooleanField label="products_reposition" source="productsReposition" />
        <ReferenceField
          label="property"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="synchronization_status"
          source="synchronizationStatus"
        />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
