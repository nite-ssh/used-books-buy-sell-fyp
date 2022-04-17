import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutUserInput } from "./BookUnverifiedCreateWithoutUserInput";
import { BookUnverifiedUpdateWithoutUserInput } from "./BookUnverifiedUpdateWithoutUserInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookUnverifiedUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookUnverifiedUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutUserInput;
}
