import * as TypeGraphQL from "type-graphql";

export enum BookCategoryEnum {
  FANTASY = "FANTASY",
  ADVENTURE = "ADVENTURE",
  ROMANCE = "ROMANCE",
  CONTEMPORARY = "CONTEMPORARY",
  DYSTOPIAN = "DYSTOPIAN",
  MYSTERY = "MYSTERY",
  HORROR = "HORROR",
  THRILLER = "THRILLER",
  PARANORMAL = "PARANORMAL",
  HISTORICAL_FICTION = "HISTORICAL_FICTION",
  SCIENCE_FICTION = "SCIENCE_FICTION",
  MEMOIR = "MEMOIR",
  COOKING = "COOKING",
  ART = "ART",
  SELF_HELP = "SELF_HELP",
  DEVELOPMENT = "DEVELOPMENT",
  MOTIVATIONAL = "MOTIVATIONAL",
  HEALTH = "HEALTH",
  HISTORY = "HISTORY",
  TRAVEL = "TRAVEL",
  GUIDE_HOW_TO = "GUIDE_HOW_TO",
  FAMILIES_RELATIONSHIPS = "FAMILIES_RELATIONSHIPS",
  HUMOR = "HUMOR",
  MEDICAL_PREPARATION = "MEDICAL_PREPARATION",
  ENGINEERING_PREPARATION = "ENGINEERING_PREPARATION",
  SEE_PREPARATION = "SEE_PREPARATION",
  PLUS_TWO = "PLUS_TWO"
}
TypeGraphQL.registerEnumType(BookCategoryEnum, {
  name: "BookCategoryEnum",
  description: undefined,
});
