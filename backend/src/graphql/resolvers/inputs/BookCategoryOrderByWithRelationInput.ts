import * as TypeGraphQL from "type-graphql";
import { BookOrderByRelationAggregateInput } from "./BookOrderByRelationAggregateInput";
import { BookUnverifiedOrderByRelationAggregateInput } from "./BookUnverifiedOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookCategoryOrderByWithRelationInput", {
  isAbstract: true
})
export class BookCategoryOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookOrderByRelationAggregateInput, {
    nullable: true
  })
  books?: BookOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedOrderByRelationAggregateInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedOrderByRelationAggregateInput | undefined;
}
