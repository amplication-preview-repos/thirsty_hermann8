import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";
import { Office } from "../office/Office";
import { Property } from "../property/Property";
import { Report } from "../report/Report";
import { ServiceType } from "../serviceType/ServiceType";

export type Service = {
  basePrice: number | null;
  booking?: Booking | null;
  category: string | null;
  createdAt: Date;
  description: string | null;
  equipmentRequirements: JsonValue;
  estimatedDuration: number | null;
  id: string;
  office?: Office | null;
  operators: JsonValue;
  property?: Property | null;
  reports?: Array<Report>;
  serviceType?: ServiceType | null;
  specialInstructions: JsonValue;
  status?: "Option1" | null;
  supervisor: string | null;
  taskForm: string | null;
  updatedAt: Date;
};
