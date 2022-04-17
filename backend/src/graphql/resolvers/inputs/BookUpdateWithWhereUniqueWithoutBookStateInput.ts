import * as TypeGraphQL from "type-graphql";
import { BookUpdateWithoutBookStateInput } from "./BookUpdateWithoutBookStateInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateWithWhereUniqueWithoutBookStateInput", {
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutBookStateInput, {
    nullable: false
  })
  data!: BookUpdateWithoutBookStateInput;
}
