import * as TypeGraphQL from "type-graphql";
import { UserRoleCreateInput } from "../../../inputs/UserRoleCreateInput";
import { UserRoleUpdateInput } from "../../../inputs/UserRoleUpdateInput";
import { UserRoleWhereUniqueInput } from "../../../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: false
  })
  where!: UserRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserRoleCreateInput, {
    nullable: false
  })
  create!: UserRoleCreateInput;

  @TypeGraphQL.Field(_type => UserRoleUpdateInput, {
    nullable: false
  })
  update!: UserRoleUpdateInput;
}
