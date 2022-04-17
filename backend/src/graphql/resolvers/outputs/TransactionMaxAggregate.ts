import * as TypeGraphQL from "type-graphql";
import { TransactionState } from "../../enums/TransactionState";

@TypeGraphQL.ObjectType("TransactionMaxAggregate", {
  isAbstract: true
})
export class TransactionMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => TransactionState, {
    nullable: true
  })
  deliveryState!: "ORDER_PLACED" | "IN_INVENTORY" | "OUT_FOR_DELIVERY" | "DELIVERED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookUnverifiedId!: string | null;
}
