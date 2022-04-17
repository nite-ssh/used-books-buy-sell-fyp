import * as TypeGraphQL from "type-graphql";
import { BookCategoryWhereUniqueInput } from "../../../inputs/BookCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: BookCategoryWhereUniqueInput;
}
