import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <div />
        <div />
        <div />
        <TextInput label="city" source="city" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="identity_document" source="identityDocument" />
        <DateTimeInput label="last_access_date" source="lastAccessDate" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="password" source="password" />
        <div />
        <TextInput label="phone_number" source="phoneNumber" />
        <div />
        <DateTimeInput label="registration_date" source="registrationDate" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <NumberInput label="wallet_balance" source="walletBalance" />
        <DateTimeInput label="wallet_last_update" source="walletLastUpdate" />
      </SimpleForm>
    </Edit>
  );
};
