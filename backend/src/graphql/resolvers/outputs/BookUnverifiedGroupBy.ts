import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedAvgAggregate } from "./BookUnverifiedAvgAggregate";
import { BookUnverifiedCountAggregate } from "./BookUnverifiedCountAggregate";
import { BookUnverifiedMaxAggregate } from "./BookUnverifiedMaxAggregate";
import { BookUnverifiedMinAggregate } from "./BookUnverifiedMinAggregate";
import { BookUnverifiedSumAggregate } from "./BookUnverifiedSumAggregate";
import { BookCategoryEnum } from "../../enums/BookCategoryEnum";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.ObjectType("BookUnverifiedGroupBy", {
  isAbstract: true
})
export class BookUnverifiedGroupBy {
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

  @TypeGraphQL.Field(_type => BookUnverifiedCountAggregate, {
    nullable: true
  })
  _count!: BookUnverifiedCountAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedAvgAggregate, {
    nullable: true
  })
  _avg!: BookUnverifiedAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedSumAggregate, {
    nullable: true
  })
  _sum!: BookUnverifiedSumAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedMinAggregate, {
    nullable: true
  })
  _min!: BookUnverifiedMinAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedMaxAggregate, {
    nullable: true
  })
  _max!: BookUnverifiedMaxAggregate | null;
}
