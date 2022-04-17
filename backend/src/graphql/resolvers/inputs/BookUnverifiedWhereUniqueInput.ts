import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookUnverifiedWhereUniqueInput", {
  isAbstract: true
})
export class BookUnverifiedWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;
}
