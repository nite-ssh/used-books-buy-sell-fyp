import * as TypeGraphQL from "type-graphql";
import { BookAvgAggregate } from "./BookAvgAggregate";
import { BookCountAggregate } from "./BookCountAggregate";
import { BookMaxAggregate } from "./BookMaxAggregate";
import { BookMinAggregate } from "./BookMinAggregate";
import { BookSumAggregate } from "./BookSumAggregate";
import { BookCategoryEnum } from "../../enums/BookCategoryEnum";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.ObjectType("BookGroupBy", {
  isAbstract: true
})
export class BookGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookPhoto!: string | null;

  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  bookStateName!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";

  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: false
  })
  bookCategoryName!: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO";

  @TypeGraphQL.Field(_type => BookCountAggregate, {
    nullable: true
  })
  _count!: BookCountAggregate | null;

  @TypeGraphQL.Field(_type => BookAvgAggregate, {
    nullable: true
  })
  _avg!: BookAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookSumAggregate, {
    nullable: true
  })
  _sum!: BookSumAggregate | null;

  @TypeGraphQL.Field(_type => BookMinAggregate, {
    nullable: true
  })
  _min!: BookMinAggregate | null;

  @TypeGraphQL.Field(_type => BookMaxAggregate, {
    nullable: true
  })
  _max!: BookMaxAggregate | null;
}
