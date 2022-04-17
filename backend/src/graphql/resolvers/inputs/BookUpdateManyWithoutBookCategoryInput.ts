import * as TypeGraphQL from "type-graphql";
import { BookCreateManyBookCategoryInputEnvelope } from "./BookCreateManyBookCategoryInputEnvelope";
import { BookCreateOrConnectWithoutBookCategoryInput } from "./BookCreateOrConnectWithoutBookCategoryInput";
import { BookCreateWithoutBookCategoryInput } from "./BookCreateWithoutBookCategoryInput";
import { BookScalarWhereInput } from "./BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutBookCategoryInput } from "./BookUpdateManyWithWhereWithoutBookCategoryInput";
import { BookUpdateWithWhereUniqueWithoutBookCategoryInput } from "./BookUpdateWithWhereUniqueWithoutBookCategoryInput";
import { BookUpsertWithWhereUniqueWithoutBookCategoryInput } from "./BookUpsertWithWhereUniqueWithoutBookCategoryInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateManyWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUpdateManyWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutBookCategoryInput], {
    nullable: true
  })
  create?: BookCreateWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutBookCategoryInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutBookCategoryInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyBookCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyBookCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  set?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  delete?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutBookCategoryInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutBookCategoryInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
