import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceTitle } from "../service/ServiceTitle";

export const ServiceTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="additional_services" source="additionalServices" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="is_principal" source="isPrincipal" />
        <TextInput label="name" source="name" />
        <NumberInput
          step={1}
          label="number_of_bathrooms"
          source="numberOfBathrooms"
        />
        <NumberInput
          step={1}
          label="number_of_bedrooms"
          source="numberOfBedrooms"
        />
        <div />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="services" reference="Service">
          <SelectArrayInput
            optionText={ServiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
