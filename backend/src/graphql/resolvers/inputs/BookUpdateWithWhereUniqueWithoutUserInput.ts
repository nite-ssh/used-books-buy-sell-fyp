import * as TypeGraphQL from "type-graphql";
import { BookUpdateWithoutUserInput } from "./BookUpdateWithoutUserInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookUpdateWithoutUserInput;
}
