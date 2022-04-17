import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyBookInputEnvelope } from "./TransactionCreateManyBookInputEnvelope";
import { TransactionCreateOrConnectWithoutBookInput } from "./TransactionCreateOrConnectWithoutBookInput";
import { TransactionCreateWithoutBookInput } from "./TransactionCreateWithoutBookInput";
import { TransactionScalarWhereInput } from "./TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutBookInput } from "./TransactionUpdateManyWithWhereWithoutBookInput";
import { TransactionUpdateWithWhereUniqueWithoutBookInput } from "./TransactionUpdateWithWhereUniqueWithoutBookInput";
import { TransactionUpsertWithWhereUniqueWithoutBookInput } from "./TransactionUpsertWithWhereUniqueWithoutBookInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateManyWithoutBookInput", {
  isAbstract: true
})
export class TransactionUpdateManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutBookInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyBookInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutBookInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
