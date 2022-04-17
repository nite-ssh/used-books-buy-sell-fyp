import * as TypeGraphQL from "type-graphql";
import { UserScalarWhereInput } from "./UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "./UserUpdateManyMutationInput";

@TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutUserRoleInput", {
  isAbstract: true
})
export class UserUpdateManyWithWhereWithoutUserRoleInput {
  @TypeGraphQL.Field(_type => UserScalarWhereInput, {
    nullable: false
  })
  where!: UserScalarWhereInput;

  @TypeGraphQL.Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;
}
