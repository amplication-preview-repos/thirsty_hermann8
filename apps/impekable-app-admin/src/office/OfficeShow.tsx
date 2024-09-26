import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { OFFICE_TITLE_FIELD } from "./OfficeTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";
import { SERVICETYPE_TITLE_FIELD } from "../serviceType/ServiceTypeTitle";

export const OfficeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="officeId"
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
          target="officeId"
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
          reference="Request"
          target="officeId"
          label="Requests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="accepted_proposal" source="acceptedProposal" />
            <ReferenceField
              label="booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="documents" source="documents" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="proposals" source="proposals" />
            <TextField label="proposed_dates" source="proposedDates" />
            <TextField label="proposed_value" source="proposedValue" />
            <TextField label="reason" source="reason" />
            <ReferenceField
              label="report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="request_date" source="requestDate" />
            <TextField label="request_type" source="requestType" />
            <TextField label="requester" source="requester" />
            <TextField label="responder" source="responder" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Service"
          target="officeId"
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
