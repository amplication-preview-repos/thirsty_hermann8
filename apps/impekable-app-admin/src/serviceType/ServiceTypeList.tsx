import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ServiceTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ServiceTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
