import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutBookStateInput } from "./BookUnverifiedCreateWithoutBookStateInput";
import { BookUnverifiedUpdateWithoutBookStateInput } from "./BookUnverifiedUpdateWithoutBookStateInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpsertWithWhereUniqueWithoutBookStateInput", {
  isAbstract: true
})
export class BookUnverifiedUpsertWithWhereUniqueWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutBookStateInput, {
    nullable: false
  })
  update!: BookUnverifiedUpdateWithoutBookStateInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutBookStateInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutBookStateInput;
}
