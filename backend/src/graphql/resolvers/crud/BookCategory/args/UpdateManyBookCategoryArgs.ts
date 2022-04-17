import * as TypeGraphQL from "type-graphql";
import { BookCategoryUpdateManyMutationInput } from "../../../inputs/BookCategoryUpdateManyMutationInput";
import { BookCategoryWhereInput } from "../../../inputs/BookCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookCategoryWhereInput, {
    nullable: true
  })
  where?: BookCategoryWhereInput | undefined;
}
