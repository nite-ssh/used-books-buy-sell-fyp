import * as TypeGraphQL from "type-graphql";
import { UserRoleCreateWithoutUserInput } from "./UserRoleCreateWithoutUserInput";
import { UserRoleUpdateWithoutUserInput } from "./UserRoleUpdateWithoutUserInput";

@TypeGraphQL.InputType("UserRoleUpsertWithoutUserInput", {
  isAbstract: true
})
export class UserRoleUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => UserRoleUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserRoleUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserRoleCreateWithoutUserInput;
}
