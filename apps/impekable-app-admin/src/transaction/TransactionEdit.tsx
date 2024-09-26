import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="booking.id" reference="Booking" label="booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <div />
        <SelectInput
          source="paymentMethod"
          label="payment_method"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="post_balance" source="postBalance" />
        <NumberInput label="previous_balance" source="previousBalance" />
        <TextInput label="receiver_user" source="receiverUser" />
        <TextInput label="sender_user" source="senderUser" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="transaction_date" source="transactionDate" />
        <SelectInput
          source="transactionType"
          label="transaction_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
