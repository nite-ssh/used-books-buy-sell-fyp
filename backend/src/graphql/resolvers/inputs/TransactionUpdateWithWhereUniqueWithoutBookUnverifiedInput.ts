import * as TypeGraphQL from "type-graphql";
import { TransactionUpdateWithoutBookUnverifiedInput } from "./TransactionUpdateWithoutBookUnverifiedInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class TransactionUpdateWithWhereUniqueWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutBookUnverifiedInput, {
    nullable: false
  })
  data!: TransactionUpdateWithoutBookUnverifiedInput;
}
