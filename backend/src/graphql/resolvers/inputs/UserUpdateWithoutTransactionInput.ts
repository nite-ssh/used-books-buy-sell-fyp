import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateManyWithoutUserInput } from "./BookUnverifiedUpdateManyWithoutUserInput";
import { BookUpdateManyWithoutUserInput } from "./BookUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { UserRoleUpdateOneRequiredWithoutUserInput } from "./UserRoleUpdateOneRequiredWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutTransactionInput", {
  isAbstract: true
})
export class UserUpdateWithoutTransactionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  profilePictureUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateManyWithoutUserInput, {
    nullable: true
  })
  books?: BookUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleUpdateOneRequiredWithoutUserInput, {
    nullable: true
  })
  userRole?: UserRoleUpdateOneRequiredWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyWithoutUserInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedUpdateManyWithoutUserInput | undefined;
}
