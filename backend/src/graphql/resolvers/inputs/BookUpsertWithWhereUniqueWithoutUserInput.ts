import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutUserInput } from "./BookCreateWithoutUserInput";
import { BookUpdateWithoutUserInput } from "./BookUpdateWithoutUserInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookCreateWithoutUserInput;
}
