import * as TypeGraphQL from "type-graphql";
import { BookStateCountAggregate } from "./BookStateCountAggregate";
import { BookStateMaxAggregate } from "./BookStateMaxAggregate";
import { BookStateMinAggregate } from "./BookStateMinAggregate";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.ObjectType("BookStateGroupBy", {
  isAbstract: true
})
export class BookStateGroupBy {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  name!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

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
