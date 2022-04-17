import * as TypeGraphQL from "type-graphql";
import { NestedEnumTransactionStateFilter } from "./NestedEnumTransactionStateFilter";
import { TransactionState } from "../../enums/TransactionState";

@TypeGraphQL.InputType("EnumTransactionStateFilter", {
  isAbstract: true
})
export class EnumTransactionStateFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTransactionStateFilter, {
    nullable: true
  })
  not?: NestedEnumTransactionStateFilter | undefined;
}
