import * as TypeGraphQL from "type-graphql";
import { BookStateCountOrderByAggregateInput } from "./BookStateCountOrderByAggregateInput";
import { BookStateMaxOrderByAggregateInput } from "./BookStateMaxOrderByAggregateInput";
import { BookStateMinOrderByAggregateInput } from "./BookStateMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookStateOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookStateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookStateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookStateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookStateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookStateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookStateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookStateMinOrderByAggregateInput | undefined;
}
