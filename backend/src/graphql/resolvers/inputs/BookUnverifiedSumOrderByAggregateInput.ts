import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookUnverifiedSumOrderByAggregateInput", {
  isAbstract: true
})
export class BookUnverifiedSumOrderByAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;
}
