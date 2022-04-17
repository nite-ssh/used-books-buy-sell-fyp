import * as TypeGraphQL from "type-graphql";
import { BookCategoryUpdateOneRequiredWithoutBookUnverifiedInput } from "./BookCategoryUpdateOneRequiredWithoutBookUnverifiedInput";
import { IntFieldUpdateOperationsInput } from "./IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "./NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutBookUnverifiedInput } from "./TransactionUpdateManyWithoutBookUnverifiedInput";
import { UserUpdateOneRequiredWithoutBookUnverifiedInput } from "./UserUpdateOneRequiredWithoutBookUnverifiedInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateWithoutBookStateInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateWithoutBookStateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  author?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bookPhoto?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookUnverifiedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryUpdateOneRequiredWithoutBookUnverifiedInput, {
    nullable: true
  })
  bookCategory?: BookCategoryUpdateOneRequiredWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpdateManyWithoutBookUnverifiedInput, {
    nullable: true
  })
  transaction?: TransactionUpdateManyWithoutBookUnverifiedInput | undefined;
}
