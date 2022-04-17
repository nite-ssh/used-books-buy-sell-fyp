import * as TypeGraphQL from "type-graphql";
import { EnumBookCategoryEnumWithAggregatesFilter } from "./EnumBookCategoryEnumWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookCategoryScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookCategoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumBookCategoryEnumWithAggregatesFilter, {
    nullable: true
  })
  name?: EnumBookCategoryEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;
}
