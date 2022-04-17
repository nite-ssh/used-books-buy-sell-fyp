import * as TypeGraphQL from "type-graphql";
import { BookCategory } from "./BookCategory";
import { BookState } from "./BookState";
import { Transaction } from "./Transaction";
import { User } from "./User";
import { BookCategoryEnum } from "../enums/BookCategoryEnum";
import { BookStateEnum } from "../enums/BookStateEnum";
import { BookUnverifiedCount } from "../resolvers/outputs/BookUnverifiedCount";

@TypeGraphQL.ObjectType("BookUnverified", {
  isAbstract: true
})
export class BookUnverified {
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
  author?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookPhoto?: string | null;

  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  bookStateName!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";

  @TypeGraphQL.Field(_type => BookCategoryEnum, {
    nullable: false
  })
  bookCategoryName!: "FANTASY" | "ADVENTURE" | "ROMANCE" | "CONTEMPORARY" | "DYSTOPIAN" | "MYSTERY" | "HORROR" | "THRILLER" | "PARANORMAL" | "HISTORICAL_FICTION" | "SCIENCE_FICTION" | "MEMOIR" | "COOKING" | "ART" | "SELF_HELP" | "DEVELOPMENT" | "MOTIVATIONAL" | "HEALTH" | "HISTORY" | "TRAVEL" | "GUIDE_HOW_TO" | "FAMILIES_RELATIONSHIPS" | "HUMOR" | "MEDICAL_PREPARATION" | "ENGINEERING_PREPARATION" | "SEE_PREPARATION" | "PLUS_TWO";

  user?: User;

  bookState?: BookState;

  bookCategory?: BookCategory;

  transaction?: Transaction[];

  @TypeGraphQL.Field(_type => BookUnverifiedCount, {
    nullable: true
  })
  _count?: BookUnverifiedCount | null;
}
