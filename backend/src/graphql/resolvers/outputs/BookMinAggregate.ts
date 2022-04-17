import * as TypeGraphQL from "type-graphql";
import { BookCategoryEnum } from "../../enums/BookCategoryEnum";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.ObjectType("BookMinAggregate", {
  isAbstract: true
})
export class BookMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  price!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookPhoto!: string | null;

  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: true
  })
  bookStateName!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD" | null;

  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: true
  })
  bookCategoryName!: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO" | null;
}
