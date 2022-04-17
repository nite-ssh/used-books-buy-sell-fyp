import * as TypeGraphQL from "type-graphql";
import { BookUpdateWithoutBookCategoryInput } from "./BookUpdateWithoutBookCategoryInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateWithWhereUniqueWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutBookCategoryInput, {
    nullable: false
  })
  data!: BookUpdateWithoutBookCategoryInput;
}
