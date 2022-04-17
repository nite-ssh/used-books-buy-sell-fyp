import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookStateCountAggregate", {
  isAbstract: true
})
export class BookStateCountAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  name!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  description!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  _all!: number;
}
