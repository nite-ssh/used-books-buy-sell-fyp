import * as TypeGraphQL from "type-graphql";
import { BookCreateNestedManyWithoutBookCategoryInput } from "./BookCreateNestedManyWithoutBookCategoryInput";
import { BookUnverifiedCreateNestedManyWithoutBookCategoryInput } from "./BookUnverifiedCreateNestedManyWithoutBookCategoryInput";
import { BookCategoryEnum } from "../../enums/BookCategoryEnum";

@TypeGraphQL.InputType("BookCategoryCreateInput", {
  isAbstract: true
})
export class BookCategoryCreateInput {
  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: false
  })
  name!: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutBookCategoryInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutBookCategoryInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateNestedManyWithoutBookCategoryInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedCreateNestedManyWithoutBookCategoryInput | undefined;
}
