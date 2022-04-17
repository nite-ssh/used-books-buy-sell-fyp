import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateWithoutBookStateInput } from "./BookUnverifiedUpdateWithoutBookStateInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateWithWhereUniqueWithoutBookStateInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateWithWhereUniqueWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutBookStateInput, {
    nullable: false
  })
  data!: BookUnverifiedUpdateWithoutBookStateInput;
}
