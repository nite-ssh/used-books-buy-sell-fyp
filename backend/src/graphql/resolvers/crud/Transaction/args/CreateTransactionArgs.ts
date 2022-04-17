import * as TypeGraphQL from "type-graphql";
import { TransactionCreateInput } from "../../../inputs/TransactionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionCreateInput, {
    nullable: false
  })
  data!: TransactionCreateInput;
}
