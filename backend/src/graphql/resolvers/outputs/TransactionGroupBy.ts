import * as TypeGraphQL from "type-graphql";
import { TransactionCountAggregate } from "./TransactionCountAggregate";
import { TransactionMaxAggregate } from "./TransactionMaxAggregate";
import { TransactionMinAggregate } from "./TransactionMinAggregate";
import { TransactionState } from "../../enums/TransactionState";

@TypeGraphQL.ObjectType("TransactionGroupBy", {
  isAbstract: true
})
export class TransactionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookUnverifiedId!: string | null;

  @TypeGraphQL.Field(_type => TransactionCountAggregate, {
    nullable: true
  })
  _count!: TransactionCountAggregate | null;

  @TypeGraphQL.Field(_type => TransactionMinAggregate, {
    nullable: true
  })
  _min!: TransactionMinAggregate | null;

  @TypeGraphQL.Field(_type => TransactionMaxAggregate, {
    nullable: true
  })
  _max!: TransactionMaxAggregate | null;
}
