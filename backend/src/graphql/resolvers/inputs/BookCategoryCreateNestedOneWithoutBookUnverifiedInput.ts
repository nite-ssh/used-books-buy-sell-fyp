import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateOrConnectWithoutBookUnverifiedInput } from "./BookCategoryCreateOrConnectWithoutBookUnverifiedInput";
import { BookCategoryCreateWithoutBookUnverifiedInput } from "./BookCategoryCreateWithoutBookUnverifiedInput";
import { BookCategoryWhereUniqueInput } from "./BookCategoryWhereUniqueInput";

@TypeGraphQL.InputType("BookCategoryCreateNestedOneWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookCategoryCreateNestedOneWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBookUnverifiedInput, {
    nullable: true
  })
  create?: BookCategoryCreateWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryCreateOrConnectWithoutBookUnverifiedInput, {
    nullable: true
  })
  connectOrCreate?: BookCategoryCreateOrConnectWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: BookCategoryWhereUniqueInput | undefined;
}
