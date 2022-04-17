import * as TypeGraphQL from "type-graphql";
import { BookCategoryOrderByWithAggregationInput } from "../../../inputs/BookCategoryOrderByWithAggregationInput";
import { BookCategoryScalarWhereWithAggregatesInput } from "../../../inputs/BookCategoryScalarWhereWithAggregatesInput";
import { BookCategoryWhereInput } from "../../../inputs/BookCategoryWhereInput";
import { BookCategoryScalarFieldEnum } from "../../../../enums/BookCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookCategoryArgs {
  @TypeGraphQL.Field(_type => BookCategoryWhereInput, {
    nullable: true
  })
  where?: BookCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookCategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"name" | "description">;

  @TypeGraphQL.Field(_type => BookCategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
