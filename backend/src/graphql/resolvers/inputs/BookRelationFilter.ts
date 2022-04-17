import * as TypeGraphQL from "type-graphql";
import { BookWhereInput } from "./BookWhereInput";

@TypeGraphQL.InputType("BookRelationFilter", {
  isAbstract: true
})
export class BookRelationFilter {
  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  is?: BookWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  isNot?: BookWhereInput | undefined;
}
