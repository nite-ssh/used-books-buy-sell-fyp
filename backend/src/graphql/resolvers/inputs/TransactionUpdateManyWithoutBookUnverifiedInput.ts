import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyBookUnverifiedInputEnvelope } from "./TransactionCreateManyBookUnverifiedInputEnvelope";
import { TransactionCreateOrConnectWithoutBookUnverifiedInput } from "./TransactionCreateOrConnectWithoutBookUnverifiedInput";
import { TransactionCreateWithoutBookUnverifiedInput } from "./TransactionCreateWithoutBookUnverifiedInput";
import { TransactionScalarWhereInput } from "./TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutBookUnverifiedInput } from "./TransactionUpdateManyWithWhereWithoutBookUnverifiedInput";
import { TransactionUpdateWithWhereUniqueWithoutBookUnverifiedInput } from "./TransactionUpdateWithWhereUniqueWithoutBookUnverifiedInput";
import { TransactionUpsertWithWhereUniqueWithoutBookUnverifiedInput } from "./TransactionUpsertWithWhereUniqueWithoutBookUnverifiedInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateManyWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class TransactionUpdateManyWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutBookUnverifiedInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutBookUnverifiedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutBookUnverifiedInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutBookUnverifiedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutBookUnverifiedInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutBookUnverifiedInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyBookUnverifiedInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyBookUnverifiedInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutBookUnverifiedInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutBookUnverifiedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutBookUnverifiedInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutBookUnverifiedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
