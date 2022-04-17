import * as TypeGraphQL from "type-graphql";
import { EnumUserRoleEnumFieldUpdateOperationsInput } from "./EnumUserRoleEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserRoleUpdateManyMutationInput", {
  isAbstract: true
})
export class UserRoleUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumUserRoleEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumUserRoleEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;
}
