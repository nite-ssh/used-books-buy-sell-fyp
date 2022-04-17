import * as TypeGraphQL from "type-graphql";
import { EnumTransactionStateFieldUpdateOperationsInput } from "./EnumTransactionStateFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "./NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TransactionUpdateManyMutationInput", {
  isAbstract: true
})
export class TransactionUpdateManyMutationInput {
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
}
