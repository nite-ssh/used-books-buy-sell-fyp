import * as TypeGraphQL from "type-graphql";

export enum TransactionScalarFieldEnum {
  id = "id",
  address = "address",
  deliveryState = "deliveryState",
  userId = "userId",
  bookId = "bookId",
  bookUnverifiedId = "bookUnverifiedId"
}
TypeGraphQL.registerEnumType(TransactionScalarFieldEnum, {
  name: "TransactionScalarFieldEnum",
  description: undefined,
});
