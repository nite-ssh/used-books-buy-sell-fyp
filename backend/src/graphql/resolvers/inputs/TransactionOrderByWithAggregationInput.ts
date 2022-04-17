import * as TypeGraphQL from "type-graphql";
import { TransactionCountOrderByAggregateInput } from "./TransactionCountOrderByAggregateInput";
import { TransactionMaxOrderByAggregateInput } from "./TransactionMaxOrderByAggregateInput";
import { TransactionMinOrderByAggregateInput } from "./TransactionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TransactionOrderByWithAggregationInput", {
  isAbstract: true
})
export class TransactionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deliveryState?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookUnverifiedId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TransactionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TransactionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TransactionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TransactionMinOrderByAggregateInput | undefined;
}
