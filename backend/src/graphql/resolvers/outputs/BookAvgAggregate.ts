import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookAvgAggregate", {
  isAbstract: true
})
export class BookAvgAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  price!: number | null;
}
