import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateWithoutUserInput } from "./BookUnverifiedUpdateWithoutUserInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookUnverifiedUpdateWithoutUserInput;
}
