import * as TypeGraphQL from "type-graphql";
import { TransactionState } from "../../enums/TransactionState";

@TypeGraphQL.InputType("EnumTransactionStateFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumTransactionStateFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TransactionState, {
    nullable: true
  })
  set?: "ORDER_PLACED" | "IN_INVENTORY" | "OUT_FOR_DELIVERY" | "DELIVERED" | undefined;
}
