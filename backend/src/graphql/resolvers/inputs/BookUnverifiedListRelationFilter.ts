import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedWhereInput } from "./BookUnverifiedWhereInput";

@TypeGraphQL.InputType("BookUnverifiedListRelationFilter", {
  isAbstract: true
})
export class BookUnverifiedListRelationFilter {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  every?: BookUnverifiedWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  some?: BookUnverifiedWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  none?: BookUnverifiedWhereInput | undefined;
}
