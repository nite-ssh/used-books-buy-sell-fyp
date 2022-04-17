import * as TypeGraphQL from "type-graphql";
import { Book } from "./Book";
import { BookUnverified } from "./BookUnverified";
import { BookCategoryEnum } from "../enums/BookCategoryEnum";
import { BookCategoryCount } from "../resolvers/outputs/BookCategoryCount";

@TypeGraphQL.ObjectType("BookCategory", {
  isAbstract: true
})
export class BookCategory {
  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: false
  })
  name!: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  books?: Book[];

  BookUnverified?: BookUnverified[];

  @TypeGraphQL.Field(_type => BookCategoryCount, {
    nullable: true
  })
  _count?: BookCategoryCount | null;
}
