import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyBookCategoryInputEnvelope } from "./BookUnverifiedCreateManyBookCategoryInputEnvelope";
import { BookUnverifiedCreateOrConnectWithoutBookCategoryInput } from "./BookUnverifiedCreateOrConnectWithoutBookCategoryInput";
import { BookUnverifiedCreateWithoutBookCategoryInput } from "./BookUnverifiedCreateWithoutBookCategoryInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateNestedManyWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUnverifiedCreateNestedManyWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateWithoutBookCategoryInput], {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedCreateOrConnectWithoutBookCategoryInput], {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateManyBookCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: BookUnverifiedCreateManyBookCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  connect?: BookUnverifiedWhereUniqueInput[] | undefined;
}
