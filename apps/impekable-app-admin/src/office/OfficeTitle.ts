import { Office as TOffice } from "../api/office/Office";

export const OFFICE_TITLE_FIELD = "franchisee";

export const OfficeTitle = (record: TOffice): string => {
  return record.franchisee?.toString() || String(record.id);
};
