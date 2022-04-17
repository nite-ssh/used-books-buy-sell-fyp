import * as TypeGraphQL from "type-graphql";
import { UserOrderByRelationAggregateInput } from "./UserOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserRoleOrderByWithRelationInput", {
  isAbstract: true
})
export class UserRoleOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  user?: UserOrderByRelationAggregateInput | undefined;
}
