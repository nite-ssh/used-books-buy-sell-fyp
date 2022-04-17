import * as TypeGraphQL from "type-graphql";
import { EnumUserRoleEnumWithAggregatesFilter } from "./EnumUserRoleEnumWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserRoleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserRoleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleEnumWithAggregatesFilter, {
    nullable: true
  })
  name?: EnumUserRoleEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;
}
