import * as TypeGraphQL from "type-graphql";
import { BookCategoryOrderByWithRelationInput } from "../../../inputs/BookCategoryOrderByWithRelationInput";
import { BookCategoryWhereInput } from "../../../inputs/BookCategoryWhereInput";
import { BookCategoryWhereUniqueInput } from "../../../inputs/BookCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryWhereInput, {
    nullable: true
  })
  where?: BookCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
