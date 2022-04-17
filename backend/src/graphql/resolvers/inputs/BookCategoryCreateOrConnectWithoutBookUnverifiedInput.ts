import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateWithoutBookUnverifiedInput } from "./BookCategoryCreateWithoutBookUnverifiedInput";
import { BookCategoryWhereUniqueInput } from "./BookCategoryWhereUniqueInput";

@TypeGraphQL.InputType("BookCategoryCreateOrConnectWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookCategoryCreateOrConnectWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: BookCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: BookCategoryCreateWithoutBookUnverifiedInput;
}
