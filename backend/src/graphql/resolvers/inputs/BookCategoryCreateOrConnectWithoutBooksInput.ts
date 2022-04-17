import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateWithoutBooksInput } from "./BookCategoryCreateWithoutBooksInput";
import { BookCategoryWhereUniqueInput } from "./BookCategoryWhereUniqueInput";

@TypeGraphQL.InputType("BookCategoryCreateOrConnectWithoutBooksInput", {
  isAbstract: true
})
export class BookCategoryCreateOrConnectWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: BookCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBooksInput, {
    nullable: false
  })
  create!: BookCategoryCreateWithoutBooksInput;
}
