import { InputJsonValue } from "../../types";
import { ServiceCreateNestedManyWithoutServiceTypesInput } from "./ServiceCreateNestedManyWithoutServiceTypesInput";

export type ServiceTypeCreateInput = {
  additionalServices?: boolean | null;
  description?: string | null;
  isPrincipal?: boolean | null;
  name?: string | null;
  numberOfBathrooms?: number | null;
  numberOfBedrooms?: number | null;
  photos?: InputJsonValue;
  price?: number | null;
  services?: ServiceCreateNestedManyWithoutServiceTypesInput;
};
