import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateWithoutBookCategoryInput } from "./BookUnverifiedUpdateWithoutBookCategoryInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateWithWhereUniqueWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateWithWhereUniqueWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutBookCategoryInput, {
    nullable: false
  })
  data!: BookUnverifiedUpdateWithoutBookCategoryInput;
}
