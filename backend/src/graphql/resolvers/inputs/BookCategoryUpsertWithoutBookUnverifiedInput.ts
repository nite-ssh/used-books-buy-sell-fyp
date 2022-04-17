import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateWithoutBookUnverifiedInput } from "./BookCategoryCreateWithoutBookUnverifiedInput";
import { BookCategoryUpdateWithoutBookUnverifiedInput } from "./BookCategoryUpdateWithoutBookUnverifiedInput";

@TypeGraphQL.InputType("BookCategoryUpsertWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookCategoryUpsertWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookCategoryUpdateWithoutBookUnverifiedInput, {
    nullable: false
  })
  update!: BookCategoryUpdateWithoutBookUnverifiedInput;

  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: BookCategoryCreateWithoutBookUnverifiedInput;
}
