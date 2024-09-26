import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Contents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="categories" source="categories" />
        <TextField label="content_detail" source="contentDetail" />
        <TextField label="content_type" source="contentType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creator" source="creator" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="publication_date" source="publicationDate" />
        <TextField label="recipients" source="recipients" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <TextField label="update_date" source="updateDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="visibility" source="visibility" />{" "}
      </Datagrid>
    </List>
  );
};
