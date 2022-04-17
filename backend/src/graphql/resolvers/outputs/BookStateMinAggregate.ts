import * as TypeGraphQL from "type-graphql";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.ObjectType("BookStateMinAggregate", {
  isAbstract: true
})
export class BookStateMinAggregate {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: true
  })
  name!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;
}
