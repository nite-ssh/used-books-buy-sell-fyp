import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyBookUnverifiedInputEnvelope } from "./TransactionCreateManyBookUnverifiedInputEnvelope";
import { TransactionCreateOrConnectWithoutBookUnverifiedInput } from "./TransactionCreateOrConnectWithoutBookUnverifiedInput";
import { TransactionCreateWithoutBookUnverifiedInput } from "./TransactionCreateWithoutBookUnverifiedInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateNestedManyWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutBookUnverifiedInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutBookUnverifiedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutBookUnverifiedInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutBookUnverifiedInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyBookUnverifiedInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyBookUnverifiedInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
