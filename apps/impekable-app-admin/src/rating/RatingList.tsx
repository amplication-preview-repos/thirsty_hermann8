import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RatingList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Ratings"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="anonymity" source="anonymity" />
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="rated_entity_type" source="ratedEntityType" />
        <TextField label="rated_property" source="ratedProperty" />
        <TextField label="rated_role" source="ratedRole" />
        <TextField label="rated_service" source="ratedService" />
        <TextField label="rated_user" source="ratedUser" />
        <TextField label="rater" source="rater" />
        <TextField label="rater_role" source="raterRole" />
        <TextField label="rating_categories" source="ratingCategories" />
        <TextField label="rating_date" source="ratingDate" />
        <TextField label="rating_score" source="ratingScore" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="visibility" source="visibility" />{" "}
      </Datagrid>
    </List>
  );
};
