import * as TypeGraphQL from "type-graphql";
import { NestedEnumBookCategoryEnumFilter } from "./NestedEnumBookCategoryEnumFilter";
import { NestedEnumBookCategoryEnumWithAggregatesFilter } from "./NestedEnumBookCategoryEnumWithAggregatesFilter";
import { NestedIntFilter } from "./NestedIntFilter";
import { BookCategoryEnum } from "../../enums/BookCategoryEnum";

@TypeGraphQL.InputType("EnumBookCategoryEnumWithAggregatesFilter", {
  isAbstract: true
})
export class EnumBookCategoryEnumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: true
  })
  equals?: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO" | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryEnum], {
    nullable: true
  })
  in?: Array<"FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO"> | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryEnum], {
    nullable: true
  })
  notIn?: Array<"FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookCategoryEnumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBookCategoryEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookCategoryEnumFilter, {
    nullable: true
  })
  _min?: NestedEnumBookCategoryEnumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookCategoryEnumFilter, {
    nullable: true
  })
  _max?: NestedEnumBookCategoryEnumFilter | undefined;
}
