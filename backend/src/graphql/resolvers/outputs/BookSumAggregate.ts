import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookSumAggregate", {
  isAbstract: true
})
export class BookSumAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  price!: number | null;
}
