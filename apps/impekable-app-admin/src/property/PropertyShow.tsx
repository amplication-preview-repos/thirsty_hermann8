import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { PROPERTY_TITLE_FIELD } from "./PropertyTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { SERVICETYPE_TITLE_FIELD } from "../serviceType/ServiceTypeTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="additional_services" source="additionalServices" />
        <TextField label="address" source="address" />
        <TextField label="cancellation_policy" source="cancellationPolicy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emergency_contact" source="emergencyContact" />
        <TextField label="guest_capacity" source="guestCapacity" />
        <TextField label="house_rules" source="houseRules" />
        <TextField label="ID" source="id" />
        <TextField
          label="inventory_instructions"
          source="inventoryInstructions"
        />
        <TextField label="laundry_agreement" source="laundryAgreement" />
        <TextField label="number_of_bathrooms" source="numberOfBathrooms" />
        <TextField label="number_of_bedrooms" source="numberOfBedrooms" />
        <TextField label="principal_service" source="principalService" />
        <BooleanField label="products_reposition" source="productsReposition" />
        <TextField label="property_name" source="propertyName" />
        <TextField label="property_type" source="propertyType" />
        <TextField label="qr_code" source="qrCode" />
        <TextField label="special_instructions" source="specialInstructions" />
        <TextField label="square_meters" source="squareMeters" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="propertyId"
          label="Bookings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="additional_information"
              source="additionalInformation"
            />
            <TextField
              label="additional_services"
              source="additionalServices"
            />
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
            <ReferenceField
              label="office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="platform_booking_id" source="platformBookingId" />
            <TextField
              label="platform_commissions"
              source="platformCommissions"
            />
            <TextField label="platform_source" source="platformSource" />
            <TextField label="principal_service" source="principalService" />
            <BooleanField
              label="products_reposition"
              source="productsReposition"
            />
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="propertyId"
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
        <ReferenceManyField
          reference="Service"
          target="propertyId"
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
