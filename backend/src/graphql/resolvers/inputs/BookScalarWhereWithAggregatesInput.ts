import * as TypeGraphQL from "type-graphql";
import { EnumBookCategoryEnumWithAggregatesFilter } from "./EnumBookCategoryEnumWithAggregatesFilter";
import { EnumBookStateEnumWithAggregatesFilter } from "./EnumBookStateEnumWithAggregatesFilter";
import { IntWithAggregatesFilter } from "./IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "./StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  price?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  author?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  bookPhoto?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBookStateEnumWithAggregatesFilter, {
    nullable: true
  })
  bookStateName?: EnumBookStateEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBookCategoryEnumWithAggregatesFilter, {
    nullable: true
  })
  bookCategoryName?: EnumBookCategoryEnumWithAggregatesFilter | undefined;
}
