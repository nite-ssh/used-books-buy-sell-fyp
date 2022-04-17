import * as TypeGraphQL from "type-graphql";
import { BookAvgAggregate } from "./BookAvgAggregate";
import { BookCountAggregate } from "./BookCountAggregate";
import { BookMaxAggregate } from "./BookMaxAggregate";
import { BookMinAggregate } from "./BookMinAggregate";
import { BookSumAggregate } from "./BookSumAggregate";

@TypeGraphQL.ObjectType("AggregateBook", {
  isAbstract: true
})
export class AggregateBook {
  @TypeGraphQL.Field(_type => BookCountAggregate, {
    nullable: true
  })
  _count!: BookCountAggregate | null;

  @TypeGraphQL.Field(_type => BookAvgAggregate, {
    nullable: true
  })
  _avg!: BookAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookSumAggregate, {
    nullable: true
  })
  _sum!: BookSumAggregate | null;

  @TypeGraphQL.Field(_type => BookMinAggregate, {
    nullable: true
  })
  _min!: BookMinAggregate | null;

  @TypeGraphQL.Field(_type => BookMaxAggregate, {
    nullable: true
  })
  _max!: BookMaxAggregate | null;
}
