import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeamList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Teams"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation_date" source="creationDate" />
        <TextField label="creator" source="creator" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="objectives" source="objectives" />
        <TextField label="status" source="status" />
        <TextField label="team_name" source="teamName" />
        <TextField label="team_type" source="teamType" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
