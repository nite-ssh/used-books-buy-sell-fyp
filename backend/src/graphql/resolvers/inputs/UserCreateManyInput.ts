import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePictureUrl?: string | undefined;

  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: false
  })
  userRoleName!: "USER" | "ADMIN";
}
