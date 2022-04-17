import * as TypeGraphQL from "type-graphql";
import { BookCategoryWhereInput } from "./BookCategoryWhereInput";

@TypeGraphQL.InputType("BookCategoryRelationFilter", {
  isAbstract: true
})
export class BookCategoryRelationFilter {
  @TypeGraphQL.Field(_type => BookCategoryWhereInput, {
    nullable: true
  })
  is?: BookCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryWhereInput, {
    nullable: true
  })
  isNot?: BookCategoryWhereInput | undefined;
}
