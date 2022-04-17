import * as TypeGraphQL from "type-graphql";
import { BookStateWhereInput } from "./BookStateWhereInput";

@TypeGraphQL.InputType("BookStateRelationFilter", {
  isAbstract: true
})
export class BookStateRelationFilter {
  @TypeGraphQL.Field(_type => BookStateWhereInput, {
    nullable: true
  })
  is?: BookStateWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookStateWhereInput, {
    nullable: true
  })
  isNot?: BookStateWhereInput | undefined;
}
