import * as TypeGraphQL from "type-graphql";
import { UserRoleCreateOrConnectWithoutUserInput } from "./UserRoleCreateOrConnectWithoutUserInput";
import { UserRoleCreateWithoutUserInput } from "./UserRoleCreateWithoutUserInput";
import { UserRoleWhereUniqueInput } from "./UserRoleWhereUniqueInput";

@TypeGraphQL.InputType("UserRoleCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class UserRoleCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUserInput, {
    nullable: true
  })
  create?: UserRoleCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: true
  })
  connect?: UserRoleWhereUniqueInput | undefined;
}
