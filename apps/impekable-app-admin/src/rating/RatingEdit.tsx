import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="anonymity" source="anonymity" />
        <TextInput label="comments" multiline source="comments" />
        <SelectInput
          source="ratedEntityType"
          label="rated_entity_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="rated_property" source="ratedProperty" />
        <TextInput label="rated_role" source="ratedRole" />
        <TextInput label="rated_service" source="ratedService" />
        <TextInput label="rated_user" source="ratedUser" />
        <TextInput label="rater" source="rater" />
        <TextInput label="rater_role" source="raterRole" />
        <div />
        <DateTimeInput label="rating_date" source="ratingDate" />
        <NumberInput label="rating_score" source="ratingScore" />
        <SelectInput
          source="visibility"
          label="visibility"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
