import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutBookCategoryInput } from "./BookCreateWithoutBookCategoryInput";
import { BookUpdateWithoutBookCategoryInput } from "./BookUpdateWithoutBookCategoryInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpsertWithWhereUniqueWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutBookCategoryInput, {
    nullable: false
  })
  update!: BookUpdateWithoutBookCategoryInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBookCategoryInput, {
    nullable: false
  })
  create!: BookCreateWithoutBookCategoryInput;
}
