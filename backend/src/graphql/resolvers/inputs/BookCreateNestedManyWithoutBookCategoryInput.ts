import * as TypeGraphQL from "type-graphql";
import { BookCreateManyBookCategoryInputEnvelope } from "./BookCreateManyBookCategoryInputEnvelope";
import { BookCreateOrConnectWithoutBookCategoryInput } from "./BookCreateOrConnectWithoutBookCategoryInput";
import { BookCreateWithoutBookCategoryInput } from "./BookCreateWithoutBookCategoryInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedManyWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookCreateNestedManyWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutBookCategoryInput], {
    nullable: true
  })
  create?: BookCreateWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutBookCategoryInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyBookCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyBookCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}
