import * as TypeGraphQL from "type-graphql";
import { TransactionUpdateWithoutBookInput } from "./TransactionUpdateWithoutBookInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class TransactionUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutBookInput, {
    nullable: false
  })
  data!: TransactionUpdateWithoutBookInput;
}
