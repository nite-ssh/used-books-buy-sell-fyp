import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutBookCategoryInput } from "./BookCreateWithoutBookCategoryInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBookCategoryInput, {
    nullable: false
  })
  create!: BookCreateWithoutBookCategoryInput;
}
