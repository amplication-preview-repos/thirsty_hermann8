import { JsonValue } from "type-fest";

export type Content = {
  categories: JsonValue;
  contentDetail: string | null;
  contentType?: "Option1" | null;
  createdAt: Date;
  creator: string | null;
  description: string | null;
  id: string;
  publicationDate: Date | null;
  recipients: JsonValue;
  status?: "Option1" | null;
  title: string | null;
  updateDate: Date | null;
  updatedAt: Date;
  visibility?: "Option1" | null;
};
