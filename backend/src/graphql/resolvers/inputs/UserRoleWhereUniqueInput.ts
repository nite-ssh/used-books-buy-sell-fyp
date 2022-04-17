import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("UserRoleWhereUniqueInput", {
  isAbstract: true
})
export class UserRoleWhereUniqueInput {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: true
  })
  name?: "USER" | "ADMIN" | undefined;
}
