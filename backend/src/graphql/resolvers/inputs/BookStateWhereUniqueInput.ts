import * as TypeGraphQL from "type-graphql";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("BookStateWhereUniqueInput", {
  isAbstract: true
})
export class BookStateWhereUniqueInput {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: true
  })
  name?: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD" | undefined;
}
