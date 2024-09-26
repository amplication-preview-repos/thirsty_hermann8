import { InputJsonValue } from "../../types";

export type ContentUpdateInput = {
  categories?: InputJsonValue;
  contentDetail?: string | null;
  contentType?: "Option1" | null;
  creator?: string | null;
  description?: string | null;
  publicationDate?: Date | null;
  recipients?: InputJsonValue;
  status?: "Option1" | null;
  title?: string | null;
  updateDate?: Date | null;
  visibility?: "Option1" | null;
};
