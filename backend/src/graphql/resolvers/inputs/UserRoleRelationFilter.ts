import * as TypeGraphQL from "type-graphql";
import { UserRoleWhereInput } from "./UserRoleWhereInput";

@TypeGraphQL.InputType("UserRoleRelationFilter", {
  isAbstract: true
})
export class UserRoleRelationFilter {
  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  is?: UserRoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  isNot?: UserRoleWhereInput | undefined;
}
