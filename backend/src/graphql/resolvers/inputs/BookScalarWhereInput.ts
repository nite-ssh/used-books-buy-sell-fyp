import * as TypeGraphQL from "type-graphql";
import { EnumBookCategoryEnumFilter } from "./EnumBookCategoryEnumFilter";
import { EnumBookStateEnumFilter } from "./EnumBookStateEnumFilter";
import { IntFilter } from "./IntFilter";
import { StringFilter } from "./StringFilter";
import { StringNullableFilter } from "./StringNullableFilter";

@TypeGraphQL.InputType("BookScalarWhereInput", {
  isAbstract: true
})
export class BookScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  AND?: BookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  OR?: BookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  NOT?: BookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  price?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  author?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bookPhoto?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBookStateEnumFilter, {
    nullable: true
  })
  bookStateName?: EnumBookStateEnumFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBookCategoryEnumFilter, {
    nullable: true
  })
  bookCategoryName?: EnumBookCategoryEnumFilter | undefined;
}
