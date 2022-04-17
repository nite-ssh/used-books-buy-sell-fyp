import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookUnverifiedSumAggregate", {
  isAbstract: true
})
export class BookUnverifiedSumAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  price!: number | null;
}
