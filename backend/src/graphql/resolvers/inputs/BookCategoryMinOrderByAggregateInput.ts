import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookCategoryMinOrderByAggregateInput", {
  isAbstract: true
})
export class BookCategoryMinOrderByAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;
}
