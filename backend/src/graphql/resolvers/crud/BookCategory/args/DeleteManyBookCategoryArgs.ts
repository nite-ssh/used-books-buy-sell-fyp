import * as TypeGraphQL from "type-graphql";
import { BookCategoryWhereInput } from "../../../inputs/BookCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryWhereInput, {
    nullable: true
  })
  where?: BookCategoryWhereInput | undefined;
}
