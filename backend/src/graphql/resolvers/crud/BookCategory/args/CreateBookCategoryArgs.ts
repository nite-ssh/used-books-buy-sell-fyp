import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateInput } from "../../../inputs/BookCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryCreateInput, {
    nullable: false
  })
  data!: BookCategoryCreateInput;
}
