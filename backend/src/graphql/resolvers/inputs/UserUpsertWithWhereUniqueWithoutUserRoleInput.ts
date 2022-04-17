import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutUserRoleInput } from "./UserCreateWithoutUserRoleInput";
import { UserUpdateWithoutUserRoleInput } from "./UserUpdateWithoutUserRoleInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutUserRoleInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutUserRoleInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUserRoleInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUserRoleInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUserRoleInput, {
    nullable: false
  })
  create!: UserCreateWithoutUserRoleInput;
}
