import * as TypeGraphQL from "type-graphql";
import { BookStateUpdateOneRequiredWithoutBooksInput } from "./BookStateUpdateOneRequiredWithoutBooksInput";
import { IntFieldUpdateOperationsInput } from "./IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "./NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutBookInput } from "./TransactionUpdateManyWithoutBookInput";
import { UserUpdateOneRequiredWithoutBooksInput } from "./UserUpdateOneRequiredWithoutBooksInput";

@TypeGraphQL.InputType("BookUpdateWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUpdateWithoutBookCategoryInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBooksInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookStateUpdateOneRequiredWithoutBooksInput, {
    nullable: true
  })
  bookState?: BookStateUpdateOneRequiredWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpdateManyWithoutBookInput, {
    nullable: true
  })
  transaction?: TransactionUpdateManyWithoutBookInput | undefined;
}
