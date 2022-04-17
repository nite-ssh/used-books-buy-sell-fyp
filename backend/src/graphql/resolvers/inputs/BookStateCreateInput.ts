import * as TypeGraphQL from "type-graphql";
import { BookCreateNestedManyWithoutBookStateInput } from "./BookCreateNestedManyWithoutBookStateInput";
import { BookUnverifiedCreateNestedManyWithoutBookStateInput } from "./BookUnverifiedCreateNestedManyWithoutBookStateInput";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("BookStateCreateInput", {
  isAbstract: true
})
export class BookStateCreateInput {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  name!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutBookStateInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutBookStateInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateNestedManyWithoutBookStateInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedCreateNestedManyWithoutBookStateInput | undefined;
}
