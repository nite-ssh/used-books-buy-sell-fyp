import * as TypeGraphQL from "type-graphql";
import { BookStateOrderByWithAggregationInput } from "../../../inputs/BookStateOrderByWithAggregationInput";
import { BookStateScalarWhereWithAggregatesInput } from "../../../inputs/BookStateScalarWhereWithAggregatesInput";
import { BookStateWhereInput } from "../../../inputs/BookStateWhereInput";
import { BookStateScalarFieldEnum } from "../../../../enums/BookStateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateWhereInput, {
    nullable: true
  })
  where?: BookStateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookStateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookStateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookStateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"name" | "description">;

  @TypeGraphQL.Field(_type => BookStateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookStateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
