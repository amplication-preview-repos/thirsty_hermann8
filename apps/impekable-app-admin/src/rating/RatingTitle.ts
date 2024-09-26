import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "ratedProperty";

export const RatingTitle = (record: TRating): string => {
  return record.ratedProperty?.toString() || String(record.id);
};
