import { Booking } from "../booking/Booking";
import { Office } from "../office/Office";
import { JsonValue } from "type-fest";
import { Property } from "../property/Property";
import { Request } from "../request/Request";
import { Service } from "../service/Service";

export type Report = {
  assignedTo: string | null;
  author: string | null;
  booking?: Booking | null;
  createdAt: Date;
  description: string | null;
  id: string;
  office?: Office | null;
  photos: JsonValue;
  priority?: "Option1" | null;
  property?: Property | null;
  reportDatetime: Date | null;
  reportName: string | null;
  reportStatus?: "Option1" | null;
  reportType?: "Option1" | null;
  requests?: Array<Request>;
  resolutionComments: string | null;
  resolutionDate: Date | null;
  service?: Service | null;
  updatedAt: Date;
};
