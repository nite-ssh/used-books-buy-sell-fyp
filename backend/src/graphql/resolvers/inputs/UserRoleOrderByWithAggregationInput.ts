import * as TypeGraphQL from "type-graphql";
import { UserRoleCountOrderByAggregateInput } from "./UserRoleCountOrderByAggregateInput";
import { UserRoleMaxOrderByAggregateInput } from "./UserRoleMaxOrderByAggregateInput";
import { UserRoleMinOrderByAggregateInput } from "./UserRoleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserRoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserRoleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserRoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserRoleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserRoleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserRoleMinOrderByAggregateInput | undefined;
}
