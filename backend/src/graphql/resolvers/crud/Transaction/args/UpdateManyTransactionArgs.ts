import * as TypeGraphQL from "type-graphql";
import { TransactionUpdateManyMutationInput } from "../../../inputs/TransactionUpdateManyMutationInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: TransactionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  where?: TransactionWhereInput | undefined;
}
