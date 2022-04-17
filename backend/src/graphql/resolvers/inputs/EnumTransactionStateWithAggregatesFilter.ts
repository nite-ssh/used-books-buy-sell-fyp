import * as TypeGraphQL from "type-graphql";
import { NestedEnumTransactionStateFilter } from "./NestedEnumTransactionStateFilter";
import { NestedEnumTransactionStateWithAggregatesFilter } from "./NestedEnumTransactionStateWithAggregatesFilter";
import { NestedIntFilter } from "./NestedIntFilter";
import { TransactionState } from "../../enums/TransactionState";

@TypeGraphQL.InputType("EnumTransactionStateWithAggregatesFilter", {
  isAbstract: true
})
export class EnumTransactionStateWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TransactionState, {
    nullable: true
  })
  equals?: "ORDER_PLACED" | "IN_INVENTORY" | "OUT_FOR_DELIVERY" | "DELIVERED" | undefined;

  @TypeGraphQL.Field(_type => [TransactionState], {
    nullable: true
  })
  in?: Array<"ORDER_PLACED" | "IN_INVENTORY" | "OUT_FOR_DELIVERY" | "DELIVERED"> | undefined;

  @TypeGraphQL.Field(_type => [TransactionState], {
    nullable: true
  })
  notIn?: Array<"ORDER_PLACED" | "IN_INVENTORY" | "OUT_FOR_DELIVERY" | "DELIVERED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTransactionStateWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTransactionStateWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTransactionStateFilter, {
    nullable: true
  })
  _min?: NestedEnumTransactionStateFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTransactionStateFilter, {
    nullable: true
  })
  _max?: NestedEnumTransactionStateFilter | undefined;
}
