import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
