import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookCount", {
  isAbstract: true
})
export class BookCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transaction!: number;
}
