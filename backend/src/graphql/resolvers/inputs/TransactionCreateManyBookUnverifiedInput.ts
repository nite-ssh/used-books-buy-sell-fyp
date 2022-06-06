import * as TypeGraphQL from "type-graphql";
import { TransactionState } from "../../enums/TransactionState";

@TypeGraphQL.InputType("TransactionCreateManyBookUnverifiedInput", {
  isAbstract: true
})
export class TransactionCreateManyBookUnverifiedInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookId!: string;
}