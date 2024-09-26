import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation_date" source="creationDate" />
        <TextField label="creator" source="creator" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="objectives" source="objectives" />
        <TextField label="status" source="status" />
        <TextField label="team_name" source="teamName" />
        <TextField label="team_type" source="teamType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
