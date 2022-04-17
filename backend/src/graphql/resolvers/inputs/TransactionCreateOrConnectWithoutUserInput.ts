import * as TypeGraphQL from "type-graphql";
import { TransactionCreateWithoutUserInput } from "./TransactionCreateWithoutUserInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class TransactionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutUserInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutUserInput;
}
