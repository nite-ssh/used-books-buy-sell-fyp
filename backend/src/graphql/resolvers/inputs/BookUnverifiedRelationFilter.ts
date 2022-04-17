import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedWhereInput } from "./BookUnverifiedWhereInput";

@TypeGraphQL.InputType("BookUnverifiedRelationFilter", {
  isAbstract: true
})
export class BookUnverifiedRelationFilter {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  is?: BookUnverifiedWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  isNot?: BookUnverifiedWhereInput | undefined;
}
