import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookUnverifiedAvgAggregate", {
  isAbstract: true
})
export class BookUnverifiedAvgAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  price!: number | null;
}
