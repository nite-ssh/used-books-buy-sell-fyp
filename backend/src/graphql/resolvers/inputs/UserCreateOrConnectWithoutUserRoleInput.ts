import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutUserRoleInput } from "./UserCreateWithoutUserRoleInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutUserRoleInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUserRoleInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUserRoleInput, {
    nullable: false
  })
  create!: UserCreateWithoutUserRoleInput;
}
