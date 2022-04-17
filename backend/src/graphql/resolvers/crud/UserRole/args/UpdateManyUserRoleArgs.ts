import * as TypeGraphQL from "type-graphql";
import { UserRoleUpdateManyMutationInput } from "../../../inputs/UserRoleUpdateManyMutationInput";
import { UserRoleWhereInput } from "../../../inputs/UserRoleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserRoleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  where?: UserRoleWhereInput | undefined;
}
