import * as TypeGraphQL from "type-graphql";
import { BookCategoryCountAggregate } from "./BookCategoryCountAggregate";
import { BookCategoryMaxAggregate } from "./BookCategoryMaxAggregate";
import { BookCategoryMinAggregate } from "./BookCategoryMinAggregate";
import { BookCategoryEnum } from "../../enums/BookCategoryEnum";

@TypeGraphQL.ObjectType("BookCategoryGroupBy", {
  isAbstract: true
})
export class BookCategoryGroupBy {
  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: false
  })
  name!: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BookCategoryCountAggregate, {
    nullable: true
  })
  _count!: BookCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => BookCategoryMinAggregate, {
    nullable: true
  })
  _min!: BookCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => BookCategoryMaxAggregate, {
    nullable: true
  })
  _max!: BookCategoryMaxAggregate | null;
}
