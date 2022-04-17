import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateNestedOneWithoutTransactionInput } from "./BookUnverifiedCreateNestedOneWithoutTransactionInput";
import { UserCreateNestedOneWithoutTransactionInput } from "./UserCreateNestedOneWithoutTransactionInput";
import { TransactionState } from "../../enums/TransactionState";

@TypeGraphQL.InputType("TransactionCreateWithoutBookInput", {
  isAbstract: true
})
export class TransactionCreateWithoutBookInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => TransactionState, {
    nullable: false
  })
  deliveryState!: "ORDER_PLACED" | "IN_INVENTORY" | "OUT_FOR_DELIVERY" | "DELIVERED";

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTransactionInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTransactionInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateNestedOneWithoutTransactionInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedCreateNestedOneWithoutTransactionInput | undefined;
}
