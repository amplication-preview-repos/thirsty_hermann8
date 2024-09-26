import { InputJsonValue } from "../../types";
import { ServiceUpdateManyWithoutServiceTypesInput } from "./ServiceUpdateManyWithoutServiceTypesInput";

export type ServiceTypeUpdateInput = {
  additionalServices?: boolean | null;
  description?: string | null;
  isPrincipal?: boolean | null;
  name?: string | null;
  numberOfBathrooms?: number | null;
  numberOfBedrooms?: number | null;
  photos?: InputJsonValue;
  price?: number | null;
  services?: ServiceUpdateManyWithoutServiceTypesInput;
};
