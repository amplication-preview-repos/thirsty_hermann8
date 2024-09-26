import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "propertyName";

export const PropertyTitle = (record: TProperty): string => {
  return record.propertyName?.toString() || String(record.id);
};
