import * as TypeGraphQL from "type-graphql";
import { BookListRelationFilter } from "./BookListRelationFilter";
import { BookUnverifiedListRelationFilter } from "./BookUnverifiedListRelationFilter";
import { EnumBookStateEnumFilter } from "./EnumBookStateEnumFilter";
import { StringFilter } from "./StringFilter";

@TypeGraphQL.InputType("BookStateWhereInput", {
  isAbstract: true
})
export class BookStateWhereInput {
  @TypeGraphQL.Field(_type => [BookStateWhereInput], {
    nullable: true
  })
  AND?: BookStateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookStateWhereInput], {
    nullable: true
  })
  OR?: BookStateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookStateWhereInput], {
    nullable: true
  })
  NOT?: BookStateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumBookStateEnumFilter, {
    nullable: true
  })
  name?: EnumBookStateEnumFilter | undefined;

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
