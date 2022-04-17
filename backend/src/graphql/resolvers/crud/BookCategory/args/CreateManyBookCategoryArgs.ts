import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateManyInput } from "../../../inputs/BookCategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookCategoryArgs {
  @TypeGraphQL.Field(_type => [BookCategoryCreateManyInput], {
    nullable: false
  })
  data!: BookCategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
