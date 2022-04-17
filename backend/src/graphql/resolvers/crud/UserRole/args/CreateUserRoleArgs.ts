import * as TypeGraphQL from "type-graphql";
import { UserRoleCreateInput } from "../../../inputs/UserRoleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleCreateInput, {
    nullable: false
  })
  data!: UserRoleCreateInput;
}
