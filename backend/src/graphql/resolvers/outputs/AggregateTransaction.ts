import * as TypeGraphQL from "type-graphql";
import { TransactionCountAggregate } from "./TransactionCountAggregate";
import { TransactionMaxAggregate } from "./TransactionMaxAggregate";
import { TransactionMinAggregate } from "./TransactionMinAggregate";

@TypeGraphQL.ObjectType("AggregateTransaction", {
  isAbstract: true
})
export class AggregateTransaction {
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
