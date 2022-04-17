import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedOrderByWithAggregationInput } from "../../../inputs/BookUnverifiedOrderByWithAggregationInput";
import { BookUnverifiedScalarWhereWithAggregatesInput } from "../../../inputs/BookUnverifiedScalarWhereWithAggregatesInput";
import { BookUnverifiedWhereInput } from "../../../inputs/BookUnverifiedWhereInput";
import { BookUnverifiedScalarFieldEnum } from "../../../../enums/BookUnverifiedScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  where?: BookUnverifiedWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookUnverifiedOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "userId" | "price" | "author" | "bookPhoto" | "bookStateName" | "bookCategoryName">;

  @TypeGraphQL.Field(_type => BookUnverifiedScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookUnverifiedScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
