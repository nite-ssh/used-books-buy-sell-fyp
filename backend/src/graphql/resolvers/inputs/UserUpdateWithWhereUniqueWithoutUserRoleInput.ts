import * as TypeGraphQL from "type-graphql";
import { UserUpdateWithoutUserRoleInput } from "./UserUpdateWithoutUserRoleInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutUserRoleInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutUserRoleInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUserRoleInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUserRoleInput;
}
