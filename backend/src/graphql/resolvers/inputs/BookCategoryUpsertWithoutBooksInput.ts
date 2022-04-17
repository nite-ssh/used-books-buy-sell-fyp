import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateWithoutBooksInput } from "./BookCategoryCreateWithoutBooksInput";
import { BookCategoryUpdateWithoutBooksInput } from "./BookCategoryUpdateWithoutBooksInput";

@TypeGraphQL.InputType("BookCategoryUpsertWithoutBooksInput", {
  isAbstract: true
})
export class BookCategoryUpsertWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookCategoryUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: BookCategoryUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBooksInput, {
    nullable: false
  })
  create!: BookCategoryCreateWithoutBooksInput;
}
