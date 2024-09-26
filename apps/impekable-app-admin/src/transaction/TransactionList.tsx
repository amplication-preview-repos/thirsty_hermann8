import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <ReferenceField label="booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="payment_details" source="paymentDetails" />
        <TextField label="payment_method" source="paymentMethod" />
        <TextField label="post_balance" source="postBalance" />
        <TextField label="previous_balance" source="previousBalance" />
        <TextField label="receiver_user" source="receiverUser" />
        <TextField label="sender_user" source="senderUser" />
        <TextField label="status" source="status" />
        <TextField label="transaction_date" source="transactionDate" />
        <TextField label="transaction_type" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
