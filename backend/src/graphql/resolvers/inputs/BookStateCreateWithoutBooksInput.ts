import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateNestedManyWithoutBookStateInput } from "./BookUnverifiedCreateNestedManyWithoutBookStateInput";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("BookStateCreateWithoutBooksInput", {
  isAbstract: true
})
export class BookStateCreateWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  name!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateNestedManyWithoutBookStateInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedCreateNestedManyWithoutBookStateInput | undefined;
}
