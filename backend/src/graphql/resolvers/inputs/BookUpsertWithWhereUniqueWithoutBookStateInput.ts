import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutBookStateInput } from "./BookCreateWithoutBookStateInput";
import { BookUpdateWithoutBookStateInput } from "./BookUpdateWithoutBookStateInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpsertWithWhereUniqueWithoutBookStateInput", {
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutBookStateInput, {
    nullable: false
  })
  update!: BookUpdateWithoutBookStateInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBookStateInput, {
    nullable: false
  })
  create!: BookCreateWithoutBookStateInput;
}
