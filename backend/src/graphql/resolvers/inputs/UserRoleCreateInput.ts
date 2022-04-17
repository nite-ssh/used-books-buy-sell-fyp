import * as TypeGraphQL from "type-graphql";
import { UserCreateNestedManyWithoutUserRoleInput } from "./UserCreateNestedManyWithoutUserRoleInput";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("UserRoleCreateInput", {
  isAbstract: true
})
export class UserRoleCreateInput {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: false
  })
  name!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutUserRoleInput, {
    nullable: true
  })
  user?: UserCreateNestedManyWithoutUserRoleInput | undefined;
}
