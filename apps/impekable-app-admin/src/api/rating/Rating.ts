import { JsonValue } from "type-fest";

export type Rating = {
  anonymity: boolean | null;
  comments: string | null;
  createdAt: Date;
  id: string;
  ratedEntityType?: "Option1" | null;
  ratedProperty: string | null;
  ratedRole: string | null;
  ratedService: string | null;
  ratedUser: string | null;
  rater: string | null;
  raterRole: string | null;
  ratingCategories: JsonValue;
  ratingDate: Date | null;
  ratingScore: number | null;
  updatedAt: Date;
  visibility?: "Option1" | null;
};
