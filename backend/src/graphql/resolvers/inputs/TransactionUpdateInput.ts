import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateOneWithoutTransactionInput } from "./BookUnverifiedUpdateOneWithoutTransactionInput";
import { BookUpdateOneRequiredWithoutTransactionInput } from "./BookUpdateOneRequiredWithoutTransactionInput";
import { EnumTransactionStateFieldUpdateOperationsInput } from "./EnumTransactionStateFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "./NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTransactionInput } from "./UserUpdateOneRequiredWithoutTransactionInput";

@TypeGraphQL.InputType("TransactionUpdateInput", {
  isAbstract: true
})
export class TransactionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTransactionStateFieldUpdateOperationsInput, {
    nullable: true
  })
  deliveryState?: EnumTransactionStateFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTransactionInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutTransactionInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateOneWithoutTransactionInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedUpdateOneWithoutTransactionInput | undefined;
}
