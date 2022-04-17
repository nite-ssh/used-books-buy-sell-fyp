import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyUserInputEnvelope } from "./TransactionCreateManyUserInputEnvelope";
import { TransactionCreateOrConnectWithoutUserInput } from "./TransactionCreateOrConnectWithoutUserInput";
import { TransactionCreateWithoutUserInput } from "./TransactionCreateWithoutUserInput";
import { TransactionScalarWhereInput } from "./TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutUserInput } from "./TransactionUpdateManyWithWhereWithoutUserInput";
import { TransactionUpdateWithWhereUniqueWithoutUserInput } from "./TransactionUpdateWithWhereUniqueWithoutUserInput";
import { TransactionUpsertWithWhereUniqueWithoutUserInput } from "./TransactionUpsertWithWhereUniqueWithoutUserInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class TransactionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutUserInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  set?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  delete?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
