import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyBookCategoryInputEnvelope } from "./BookUnverifiedCreateManyBookCategoryInputEnvelope";
import { BookUnverifiedCreateOrConnectWithoutBookCategoryInput } from "./BookUnverifiedCreateOrConnectWithoutBookCategoryInput";
import { BookUnverifiedCreateWithoutBookCategoryInput } from "./BookUnverifiedCreateWithoutBookCategoryInput";
import { BookUnverifiedScalarWhereInput } from "./BookUnverifiedScalarWhereInput";
import { BookUnverifiedUpdateManyWithWhereWithoutBookCategoryInput } from "./BookUnverifiedUpdateManyWithWhereWithoutBookCategoryInput";
import { BookUnverifiedUpdateWithWhereUniqueWithoutBookCategoryInput } from "./BookUnverifiedUpdateWithWhereUniqueWithoutBookCategoryInput";
import { BookUnverifiedUpsertWithWhereUniqueWithoutBookCategoryInput } from "./BookUnverifiedUpsertWithWhereUniqueWithoutBookCategoryInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateManyWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateManyWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateWithoutBookCategoryInput], {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedCreateOrConnectWithoutBookCategoryInput], {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpsertWithWhereUniqueWithoutBookCategoryInput], {
    nullable: true
  })
  upsert?: BookUnverifiedUpsertWithWhereUniqueWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateManyBookCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: BookUnverifiedCreateManyBookCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  set?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  delete?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  connect?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpdateWithWhereUniqueWithoutBookCategoryInput], {
    nullable: true
  })
  update?: BookUnverifiedUpdateWithWhereUniqueWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpdateManyWithWhereWithoutBookCategoryInput], {
    nullable: true
  })
  updateMany?: BookUnverifiedUpdateManyWithWhereWithoutBookCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookUnverifiedScalarWhereInput[] | undefined;
}
