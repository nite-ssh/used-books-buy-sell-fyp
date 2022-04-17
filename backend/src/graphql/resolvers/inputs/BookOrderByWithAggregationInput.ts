import * as TypeGraphQL from "type-graphql";
import { BookAvgOrderByAggregateInput } from "./BookAvgOrderByAggregateInput";
import { BookCountOrderByAggregateInput } from "./BookCountOrderByAggregateInput";
import { BookMaxOrderByAggregateInput } from "./BookMaxOrderByAggregateInput";
import { BookMinOrderByAggregateInput } from "./BookMinOrderByAggregateInput";
import { BookSumOrderByAggregateInput } from "./BookSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookPhoto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookStateName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookCategoryName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BookAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BookSumOrderByAggregateInput | undefined;
}
