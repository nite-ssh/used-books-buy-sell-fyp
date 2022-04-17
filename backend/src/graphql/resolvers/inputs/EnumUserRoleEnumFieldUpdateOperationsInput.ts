import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("EnumUserRoleEnumFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumUserRoleEnumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: true
  })
  set?: "USER" | "ADMIN" | undefined;
}
