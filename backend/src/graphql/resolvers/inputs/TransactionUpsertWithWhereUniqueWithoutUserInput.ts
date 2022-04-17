import * as TypeGraphQL from "type-graphql";
import { TransactionCreateWithoutUserInput } from "./TransactionCreateWithoutUserInput";
import { TransactionUpdateWithoutUserInput } from "./TransactionUpdateWithoutUserInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TransactionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutUserInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutUserInput;
}
