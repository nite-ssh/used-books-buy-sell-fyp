import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookStateCount", {
  isAbstract: true
})
export class BookStateCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  books!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  BookUnverified!: number;
}
