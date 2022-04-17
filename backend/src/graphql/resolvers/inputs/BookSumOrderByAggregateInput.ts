import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookSumOrderByAggregateInput", {
  isAbstract: true
})
export class BookSumOrderByAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;
}
