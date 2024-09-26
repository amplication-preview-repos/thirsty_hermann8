import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RequestUpdateManyWithoutReportsInput } from "./RequestUpdateManyWithoutReportsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ReportUpdateInput = {
  assignedTo?: string | null;
  author?: string | null;
  booking?: BookingWhereUniqueInput | null;
  description?: string | null;
  office?: OfficeWhereUniqueInput | null;
  photos?: InputJsonValue;
  priority?: "Option1" | null;
  property?: PropertyWhereUniqueInput | null;
  reportDatetime?: Date | null;
  reportName?: string | null;
  reportStatus?: "Option1" | null;
  reportType?: "Option1" | null;
  requests?: RequestUpdateManyWithoutReportsInput;
  resolutionComments?: string | null;
  resolutionDate?: Date | null;
  service?: ServiceWhereUniqueInput | null;
};
