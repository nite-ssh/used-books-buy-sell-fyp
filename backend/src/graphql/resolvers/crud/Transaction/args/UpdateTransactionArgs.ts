import * as TypeGraphQL from "type-graphql";
import { TransactionUpdateInput } from "../../../inputs/TransactionUpdateInput";
import { TransactionWhereUniqueInput } from "../../../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionUpdateInput, {
    nullable: false
  })
  data!: TransactionUpdateInput;

  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;
}
