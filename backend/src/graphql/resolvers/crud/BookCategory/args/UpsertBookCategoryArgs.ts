import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateInput } from "../../../inputs/BookCategoryCreateInput";
import { BookCategoryUpdateInput } from "../../../inputs/BookCategoryUpdateInput";
import { BookCategoryWhereUniqueInput } from "../../../inputs/BookCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: BookCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCategoryCreateInput, {
    nullable: false
  })
  create!: BookCategoryCreateInput;

  @TypeGraphQL.Field(_type => BookCategoryUpdateInput, {
    nullable: false
  })
  update!: BookCategoryUpdateInput;
}
