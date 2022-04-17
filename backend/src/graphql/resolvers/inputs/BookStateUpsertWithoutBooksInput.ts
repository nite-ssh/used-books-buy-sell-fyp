import * as TypeGraphQL from "type-graphql";
import { BookStateCreateWithoutBooksInput } from "./BookStateCreateWithoutBooksInput";
import { BookStateUpdateWithoutBooksInput } from "./BookStateUpdateWithoutBooksInput";

@TypeGraphQL.InputType("BookStateUpsertWithoutBooksInput", {
  isAbstract: true
})
export class BookStateUpsertWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookStateUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: BookStateUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => BookStateCreateWithoutBooksInput, {
    nullable: false
  })
  create!: BookStateCreateWithoutBooksInput;
}
