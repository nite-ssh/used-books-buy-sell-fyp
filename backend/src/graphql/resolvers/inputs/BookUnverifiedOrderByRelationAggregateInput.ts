import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookUnverifiedOrderByRelationAggregateInput", {
  isAbstract: true
})
export class BookUnverifiedOrderByRelationAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
