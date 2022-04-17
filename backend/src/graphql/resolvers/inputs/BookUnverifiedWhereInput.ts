import * as TypeGraphQL from "type-graphql";
import { BookCategoryRelationFilter } from "./BookCategoryRelationFilter";
import { BookStateRelationFilter } from "./BookStateRelationFilter";
import { EnumBookCategoryEnumFilter } from "./EnumBookCategoryEnumFilter";
import { EnumBookStateEnumFilter } from "./EnumBookStateEnumFilter";
import { IntFilter } from "./IntFilter";
import { StringFilter } from "./StringFilter";
import { StringNullableFilter } from "./StringNullableFilter";
import { TransactionListRelationFilter } from "./TransactionListRelationFilter";
import { UserRelationFilter } from "./UserRelationFilter";

@TypeGraphQL.InputType("BookUnverifiedWhereInput", {
  isAbstract: true
})
export class BookUnverifiedWhereInput {
  @TypeGraphQL.Field(_type => [BookUnverifiedWhereInput], {
    nullable: true
  })
  AND?: BookUnverifiedWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereInput], {
    nullable: true
  })
  OR?: BookUnverifiedWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereInput], {
    nullable: true
  })
  NOT?: BookUnverifiedWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookStateRelationFilter, {
    nullable: true
  })
  bookState?: BookStateRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookCategoryRelationFilter, {
    nullable: true
  })
  bookCategory?: BookCategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TransactionListRelationFilter, {
    nullable: true
  })
  transaction?: TransactionListRelationFilter | undefined;
}
