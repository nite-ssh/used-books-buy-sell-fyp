import * as TypeGraphQL from "type-graphql";
import { BookCategoryUpdateInput } from "../../../inputs/BookCategoryUpdateInput";
import { BookCategoryWhereUniqueInput } from "../../../inputs/BookCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryUpdateInput, {
    nullable: false
  })
  data!: BookCategoryUpdateInput;

  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: BookCategoryWhereUniqueInput;
}
