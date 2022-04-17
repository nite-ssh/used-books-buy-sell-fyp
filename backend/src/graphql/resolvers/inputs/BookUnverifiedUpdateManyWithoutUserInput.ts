import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyUserInputEnvelope } from "./BookUnverifiedCreateManyUserInputEnvelope";
import { BookUnverifiedCreateOrConnectWithoutUserInput } from "./BookUnverifiedCreateOrConnectWithoutUserInput";
import { BookUnverifiedCreateWithoutUserInput } from "./BookUnverifiedCreateWithoutUserInput";
import { BookUnverifiedScalarWhereInput } from "./BookUnverifiedScalarWhereInput";
import { BookUnverifiedUpdateManyWithWhereWithoutUserInput } from "./BookUnverifiedUpdateManyWithWhereWithoutUserInput";
import { BookUnverifiedUpdateWithWhereUniqueWithoutUserInput } from "./BookUnverifiedUpdateWithWhereUniqueWithoutUserInput";
import { BookUnverifiedUpsertWithWhereUniqueWithoutUserInput } from "./BookUnverifiedUpsertWithWhereUniqueWithoutUserInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookUnverifiedUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookUnverifiedCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookUnverifiedUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookUnverifiedUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookUnverifiedUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookUnverifiedScalarWhereInput[] | undefined;
}
