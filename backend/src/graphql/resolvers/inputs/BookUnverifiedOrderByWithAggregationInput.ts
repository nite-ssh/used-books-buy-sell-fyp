import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedAvgOrderByAggregateInput } from "./BookUnverifiedAvgOrderByAggregateInput";
import { BookUnverifiedCountOrderByAggregateInput } from "./BookUnverifiedCountOrderByAggregateInput";
import { BookUnverifiedMaxOrderByAggregateInput } from "./BookUnverifiedMaxOrderByAggregateInput";
import { BookUnverifiedMinOrderByAggregateInput } from "./BookUnverifiedMinOrderByAggregateInput";
import { BookUnverifiedSumOrderByAggregateInput } from "./BookUnverifiedSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookUnverifiedOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookUnverifiedOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => BookUnverifiedCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookUnverifiedCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BookUnverifiedAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookUnverifiedMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookUnverifiedMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BookUnverifiedSumOrderByAggregateInput | undefined;
}
