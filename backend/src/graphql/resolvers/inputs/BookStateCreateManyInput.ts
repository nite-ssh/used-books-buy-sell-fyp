import * as TypeGraphQL from "type-graphql";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("BookStateCreateManyInput", {
  isAbstract: true
})
export class BookStateCreateManyInput {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  name!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;
}
