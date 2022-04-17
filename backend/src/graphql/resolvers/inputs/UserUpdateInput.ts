import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateManyWithoutUserInput } from "./BookUnverifiedUpdateManyWithoutUserInput";
import { BookUpdateManyWithoutUserInput } from "./BookUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutUserInput } from "./TransactionUpdateManyWithoutUserInput";
import { UserRoleUpdateOneRequiredWithoutUserInput } from "./UserRoleUpdateOneRequiredWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
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

  @TypeGraphQL.Field(_type => TransactionUpdateManyWithoutUserInput, {
    nullable: true
  })
  transaction?: TransactionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyWithoutUserInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedUpdateManyWithoutUserInput | undefined;
}
