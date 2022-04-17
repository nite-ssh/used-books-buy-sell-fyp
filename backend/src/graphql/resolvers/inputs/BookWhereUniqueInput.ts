import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookWhereUniqueInput", {
  isAbstract: true
})
export class BookWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;
}
