import * as TypeGraphQL from "type-graphql";
import { BookCategoryEnum } from "../../enums/BookCategoryEnum";

@TypeGraphQL.InputType("EnumBookCategoryEnumFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumBookCategoryEnumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: true
  })
  set?: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO" | undefined;
}
