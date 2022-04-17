import * as TypeGraphQL from "type-graphql";
import { TransactionWhereInput } from "./TransactionWhereInput";

@TypeGraphQL.InputType("TransactionListRelationFilter", {
  isAbstract: true
})
export class TransactionListRelationFilter {
  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  every?: TransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  some?: TransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  none?: TransactionWhereInput | undefined;
}
