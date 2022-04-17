import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("TransactionWhereUniqueInput", {
  isAbstract: true
})
export class TransactionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;
}
