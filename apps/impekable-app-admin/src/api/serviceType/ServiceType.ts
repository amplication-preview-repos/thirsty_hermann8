import { JsonValue } from "type-fest";
import { Service } from "../service/Service";

export type ServiceType = {
  additionalServices: boolean | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isPrincipal: boolean | null;
  name: string | null;
  numberOfBathrooms: number | null;
  numberOfBedrooms: number | null;
  photos: JsonValue;
  price: number | null;
  services?: Array<Service>;
  updatedAt: Date;
};
