import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutBookCategoryInput } from "./BookUnverifiedCreateWithoutBookCategoryInput";
import { BookUnverifiedUpdateWithoutBookCategoryInput } from "./BookUnverifiedUpdateWithoutBookCategoryInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpsertWithWhereUniqueWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUnverifiedUpsertWithWhereUniqueWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutBookCategoryInput, {
    nullable: false
  })
  update!: BookUnverifiedUpdateWithoutBookCategoryInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutBookCategoryInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutBookCategoryInput;
}
