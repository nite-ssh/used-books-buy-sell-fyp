import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyBookInputEnvelope } from "./TransactionCreateManyBookInputEnvelope";
import { TransactionCreateOrConnectWithoutBookInput } from "./TransactionCreateOrConnectWithoutBookInput";
import { TransactionCreateWithoutBookInput } from "./TransactionCreateWithoutBookInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateNestedManyWithoutBookInput", {
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutBookInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
