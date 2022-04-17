import * as TypeGraphQL from "type-graphql";
import { TransactionUpdateWithoutUserInput } from "./TransactionUpdateWithoutUserInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TransactionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TransactionUpdateWithoutUserInput;
}
