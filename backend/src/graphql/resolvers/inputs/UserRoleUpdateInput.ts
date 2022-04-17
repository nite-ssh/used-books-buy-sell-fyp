import * as TypeGraphQL from "type-graphql";
import { EnumUserRoleEnumFieldUpdateOperationsInput } from "./EnumUserRoleEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutUserRoleInput } from "./UserUpdateManyWithoutUserRoleInput";

@TypeGraphQL.InputType("UserRoleUpdateInput", {
  isAbstract: true
})
export class UserRoleUpdateInput {
  @TypeGraphQL.Field(_type => EnumUserRoleEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumUserRoleEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutUserRoleInput, {
    nullable: true
  })
  user?: UserUpdateManyWithoutUserRoleInput | undefined;
}
