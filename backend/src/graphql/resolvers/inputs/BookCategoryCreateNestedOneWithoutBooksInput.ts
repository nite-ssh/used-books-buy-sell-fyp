import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateOrConnectWithoutBooksInput } from "./BookCategoryCreateOrConnectWithoutBooksInput";
import { BookCategoryCreateWithoutBooksInput } from "./BookCategoryCreateWithoutBooksInput";
import { BookCategoryWhereUniqueInput } from "./BookCategoryWhereUniqueInput";

@TypeGraphQL.InputType("BookCategoryCreateNestedOneWithoutBooksInput", {
  isAbstract: true
})
export class BookCategoryCreateNestedOneWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBooksInput, {
    nullable: true
  })
  create?: BookCategoryCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: BookCategoryCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: BookCategoryWhereUniqueInput | undefined;
}
