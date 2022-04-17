import * as TypeGraphQL from "type-graphql";
import { TransactionScalarWhereInput } from "./TransactionScalarWhereInput";
import { TransactionUpdateManyMutationInput } from "./TransactionUpdateManyMutationInput";

@TypeGraphQL.InputType("TransactionUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class TransactionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => TransactionScalarWhereInput, {
    nullable: false
  })
  where!: TransactionScalarWhereInput;

  @TypeGraphQL.Field(_type => TransactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: TransactionUpdateManyMutationInput;
}
