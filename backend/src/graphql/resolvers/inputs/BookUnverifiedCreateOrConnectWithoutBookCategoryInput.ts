import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutBookCategoryInput } from "./BookUnverifiedCreateWithoutBookCategoryInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateOrConnectWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUnverifiedCreateOrConnectWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutBookCategoryInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutBookCategoryInput;
}
