import { Service as TService } from "../api/service/Service";

export const SERVICE_TITLE_FIELD = "category";

export const ServiceTitle = (record: TService): string => {
  return record.category?.toString() || String(record.id);
};
