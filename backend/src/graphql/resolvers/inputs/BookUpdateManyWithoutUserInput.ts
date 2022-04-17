import * as TypeGraphQL from "type-graphql";
import { BookCreateManyUserInputEnvelope } from "./BookCreateManyUserInputEnvelope";
import { BookCreateOrConnectWithoutUserInput } from "./BookCreateOrConnectWithoutUserInput";
import { BookCreateWithoutUserInput } from "./BookCreateWithoutUserInput";
import { BookScalarWhereInput } from "./BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutUserInput } from "./BookUpdateManyWithWhereWithoutUserInput";
import { BookUpdateWithWhereUniqueWithoutUserInput } from "./BookUpdateWithWhereUniqueWithoutUserInput";
import { BookUpsertWithWhereUniqueWithoutUserInput } from "./BookUpsertWithWhereUniqueWithoutUserInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class BookUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
