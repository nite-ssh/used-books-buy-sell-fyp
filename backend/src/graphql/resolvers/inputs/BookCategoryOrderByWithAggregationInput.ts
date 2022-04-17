import * as TypeGraphQL from "type-graphql";
import { BookCategoryCountOrderByAggregateInput } from "./BookCategoryCountOrderByAggregateInput";
import { BookCategoryMaxOrderByAggregateInput } from "./BookCategoryMaxOrderByAggregateInput";
import { BookCategoryMinOrderByAggregateInput } from "./BookCategoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookCategoryOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookCategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookCategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookCategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookCategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookCategoryMinOrderByAggregateInput | undefined;
}
