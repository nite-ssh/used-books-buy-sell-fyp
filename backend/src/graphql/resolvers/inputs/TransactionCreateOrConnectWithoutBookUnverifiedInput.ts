import * as TypeGraphQL from "type-graphql";
import { TransactionCreateWithoutBookUnverifiedInput } from "./TransactionCreateWithoutBookUnverifiedInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateOrConnectWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class TransactionCreateOrConnectWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutBookUnverifiedInput;
}
