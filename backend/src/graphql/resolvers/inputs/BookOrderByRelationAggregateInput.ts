import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookOrderByRelationAggregateInput", {
  isAbstract: true
})
export class BookOrderByRelationAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
