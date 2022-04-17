import * as TypeGraphQL from "type-graphql";
import { Book } from "./Book";
import { BookUnverified } from "./BookUnverified";
import { BookStateEnum } from "../enums/BookStateEnum";
import { BookStateCount } from "../resolvers/outputs/BookStateCount";

@TypeGraphQL.ObjectType("BookState", {
  isAbstract: true
})
export class BookState {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  name!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  books?: Book[];

  BookUnverified?: BookUnverified[];

  @TypeGraphQL.Field(_type => BookStateCount, {
    nullable: true
  })
  _count?: BookStateCount | null;
}
