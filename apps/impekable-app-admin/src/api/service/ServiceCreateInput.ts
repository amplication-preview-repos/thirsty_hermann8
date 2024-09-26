import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ReportCreateNestedManyWithoutServicesInput } from "./ReportCreateNestedManyWithoutServicesInput";
import { ServiceTypeWhereUniqueInput } from "../serviceType/ServiceTypeWhereUniqueInput";

export type ServiceCreateInput = {
  basePrice?: number | null;
  booking?: BookingWhereUniqueInput | null;
  category?: string | null;
  description?: string | null;
  equipmentRequirements?: InputJsonValue;
  estimatedDuration?: number | null;
  office?: OfficeWhereUniqueInput | null;
  operators?: InputJsonValue;
  property?: PropertyWhereUniqueInput | null;
  reports?: ReportCreateNestedManyWithoutServicesInput;
  serviceType?: ServiceTypeWhereUniqueInput | null;
  specialInstructions?: InputJsonValue;
  status?: "Option1" | null;
  supervisor?: string | null;
  taskForm?: string | null;
};
