import * as TypeGraphQL from "type-graphql";
import { TransactionCreateWithoutBookInput } from "./TransactionCreateWithoutBookInput";
import { TransactionUpdateWithoutBookInput } from "./TransactionUpdateWithoutBookInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class TransactionUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutBookInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutBookInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutBookInput;
}
