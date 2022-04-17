import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("UserRoleCreateManyInput", {
  isAbstract: true
})
export class UserRoleCreateManyInput {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: false
  })
  name!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;
}
