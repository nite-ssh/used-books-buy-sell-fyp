import * as TypeGraphQL from "type-graphql";
import { TransactionCreateWithoutBookInput } from "./TransactionCreateWithoutBookInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateOrConnectWithoutBookInput", {
  isAbstract: true
})
export class TransactionCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutBookInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutBookInput;
}
