import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ReportUpdateManyWithoutServicesInput } from "./ReportUpdateManyWithoutServicesInput";
import { ServiceTypeWhereUniqueInput } from "../serviceType/ServiceTypeWhereUniqueInput";

export type ServiceUpdateInput = {
  basePrice?: number | null;
  booking?: BookingWhereUniqueInput | null;
  category?: string | null;
  description?: string | null;
  equipmentRequirements?: InputJsonValue;
  estimatedDuration?: number | null;
  office?: OfficeWhereUniqueInput | null;
  operators?: InputJsonValue;
  property?: PropertyWhereUniqueInput | null;
  reports?: ReportUpdateManyWithoutServicesInput;
  serviceType?: ServiceTypeWhereUniqueInput | null;
  specialInstructions?: InputJsonValue;
  status?: "Option1" | null;
  supervisor?: string | null;
  taskForm?: string | null;
};
