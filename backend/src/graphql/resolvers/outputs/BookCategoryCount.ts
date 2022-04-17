import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookCategoryCount", {
  isAbstract: true
})
export class BookCategoryCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  books!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  BookUnverified!: number;
}
