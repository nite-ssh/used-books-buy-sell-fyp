import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedAvgAggregate } from "./BookUnverifiedAvgAggregate";
import { BookUnverifiedCountAggregate } from "./BookUnverifiedCountAggregate";
import { BookUnverifiedMaxAggregate } from "./BookUnverifiedMaxAggregate";
import { BookUnverifiedMinAggregate } from "./BookUnverifiedMinAggregate";
import { BookUnverifiedSumAggregate } from "./BookUnverifiedSumAggregate";

@TypeGraphQL.ObjectType("AggregateBookUnverified", {
  isAbstract: true
})
export class AggregateBookUnverified {
  @TypeGraphQL.Field(_type => BookUnverifiedCountAggregate, {
    nullable: true
  })
  _count!: BookUnverifiedCountAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedAvgAggregate, {
    nullable: true
  })
  _avg!: BookUnverifiedAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedSumAggregate, {
    nullable: true
  })
  _sum!: BookUnverifiedSumAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedMinAggregate, {
    nullable: true
  })
  _min!: BookUnverifiedMinAggregate | null;

  @TypeGraphQL.Field(_type => BookUnverifiedMaxAggregate, {
    nullable: true
  })
  _max!: BookUnverifiedMaxAggregate | null;
}
