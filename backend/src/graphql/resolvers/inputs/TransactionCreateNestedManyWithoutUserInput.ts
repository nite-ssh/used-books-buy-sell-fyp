import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyUserInputEnvelope } from "./TransactionCreateManyUserInputEnvelope";
import { TransactionCreateOrConnectWithoutUserInput } from "./TransactionCreateOrConnectWithoutUserInput";
import { TransactionCreateWithoutUserInput } from "./TransactionCreateWithoutUserInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutUserInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
