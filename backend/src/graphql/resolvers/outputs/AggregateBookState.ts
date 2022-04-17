import * as TypeGraphQL from "type-graphql";
import { BookStateCountAggregate } from "./BookStateCountAggregate";
import { BookStateMaxAggregate } from "./BookStateMaxAggregate";
import { BookStateMinAggregate } from "./BookStateMinAggregate";

@TypeGraphQL.ObjectType("AggregateBookState", {
  isAbstract: true
})
export class AggregateBookState {
  @TypeGraphQL.Field(_type => BookStateCountAggregate, {
    nullable: true
  })
  _count!: BookStateCountAggregate | null;

  @TypeGraphQL.Field(_type => BookStateMinAggregate, {
    nullable: true
  })
  _min!: BookStateMinAggregate | null;

  @TypeGraphQL.Field(_type => BookStateMaxAggregate, {
    nullable: true
  })
  _max!: BookStateMaxAggregate | null;
}
