import * as TypeGraphQL from "type-graphql";
import { UserRoleCreateWithoutUserInput } from "./UserRoleCreateWithoutUserInput";
import { UserRoleWhereUniqueInput } from "./UserRoleWhereUniqueInput";

@TypeGraphQL.InputType("UserRoleCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UserRoleCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: false
  })
  where!: UserRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserRoleCreateWithoutUserInput;
}
