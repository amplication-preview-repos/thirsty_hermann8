import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="availability" source="availability" />
        <TextField label="billing_information" source="billingInformation" />
        <TextField label="certifications" source="certifications" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="first_name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="identity_document" source="identityDocument" />
        <TextField label="last_access_date" source="lastAccessDate" />
        <TextField label="last_name" source="lastName" />
        <TextField label="password" source="password" />
        <TextField label="payment_methods" source="paymentMethods" />
        <TextField label="phone_number" source="phoneNumber" />
        <TextField label="preferences" source="preferences" />
        <TextField label="registration_date" source="registrationDate" />
        <TextField label="role" source="role" />
        <TextField label="status" source="status" />
        <TextField label="team_memberships" source="teamMemberships" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wallet_balance" source="walletBalance" />
        <TextField label="wallet_last_update" source="walletLastUpdate" />
      </SimpleShowLayout>
    </Show>
  );
};
