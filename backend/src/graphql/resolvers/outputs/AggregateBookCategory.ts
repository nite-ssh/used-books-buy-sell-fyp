import * as TypeGraphQL from "type-graphql";
import { BookCategoryCountAggregate } from "./BookCategoryCountAggregate";
import { BookCategoryMaxAggregate } from "./BookCategoryMaxAggregate";
import { BookCategoryMinAggregate } from "./BookCategoryMinAggregate";

@TypeGraphQL.ObjectType("AggregateBookCategory", {
  isAbstract: true
})
export class AggregateBookCategory {
  @TypeGraphQL.Field(_type => BookCategoryCountAggregate, {
    nullable: true
  })
  _count!: BookCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => BookCategoryMinAggregate, {
    nullable: true
  })
  _min!: BookCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => BookCategoryMaxAggregate, {
    nullable: true
  })
  _max!: BookCategoryMaxAggregate | null;
}
