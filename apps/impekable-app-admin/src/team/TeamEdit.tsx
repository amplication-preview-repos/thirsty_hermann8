import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation_date" source="creationDate" />
        <TextInput label="creator" source="creator" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="objectives" multiline source="objectives" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="team_name" source="teamName" />
        <SelectInput
          source="teamType"
          label="team_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
