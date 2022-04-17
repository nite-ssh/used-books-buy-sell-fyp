import * as TypeGraphQL from "type-graphql";
import { TransactionCreateWithoutBookUnverifiedInput } from "./TransactionCreateWithoutBookUnverifiedInput";
import { TransactionUpdateWithoutBookUnverifiedInput } from "./TransactionUpdateWithoutBookUnverifiedInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class TransactionUpsertWithWhereUniqueWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutBookUnverifiedInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutBookUnverifiedInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutBookUnverifiedInput;
}
