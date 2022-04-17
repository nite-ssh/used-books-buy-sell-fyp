import * as TypeGraphQL from "type-graphql";
import { EnumUserRoleEnumFilter } from "./EnumUserRoleEnumFilter";
import { StringFilter } from "./StringFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";

@TypeGraphQL.InputType("UserRoleWhereInput", {
  isAbstract: true
})
export class UserRoleWhereInput {
  @TypeGraphQL.Field(_type => [UserRoleWhereInput], {
    nullable: true
  })
  AND?: UserRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleWhereInput], {
    nullable: true
  })
  OR?: UserRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleWhereInput], {
    nullable: true
  })
  NOT?: UserRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleEnumFilter, {
    nullable: true
  })
  name?: EnumUserRoleEnumFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  user?: UserListRelationFilter | undefined;
}
