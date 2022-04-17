import * as TypeGraphQL from "type-graphql";
import { BookListRelationFilter } from "./BookListRelationFilter";
import { BookUnverifiedListRelationFilter } from "./BookUnverifiedListRelationFilter";
import { EnumBookCategoryEnumFilter } from "./EnumBookCategoryEnumFilter";
import { StringFilter } from "./StringFilter";

@TypeGraphQL.InputType("BookCategoryWhereInput", {
  isAbstract: true
})
export class BookCategoryWhereInput {
  @TypeGraphQL.Field(_type => [BookCategoryWhereInput], {
    nullable: true
  })
  AND?: BookCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryWhereInput], {
    nullable: true
  })
  OR?: BookCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCategoryWhereInput], {
    nullable: true
  })
  NOT?: BookCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumBookCategoryEnumFilter, {
    nullable: true
  })
  name?: EnumBookCategoryEnumFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BookListRelationFilter, {
    nullable: true
  })
  books?: BookListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedListRelationFilter, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedListRelationFilter | undefined;
}
