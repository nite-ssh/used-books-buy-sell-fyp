import * as TypeGraphQL from "type-graphql";

export enum TransactionState {
  ORDER_PLACED = "ORDER_PLACED",
  IN_INVENTORY = "IN_INVENTORY",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED"
}
TypeGraphQL.registerEnumType(TransactionState, {
  name: "TransactionState",
  description: undefined,
});
