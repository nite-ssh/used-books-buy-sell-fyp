import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookUnverifiedCount", {
  isAbstract: true
})
export class BookUnverifiedCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transaction!: number;
}
