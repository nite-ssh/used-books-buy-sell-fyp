import * as TypeGraphQL from "type-graphql";
import { BookListRelationFilter } from "./BookListRelationFilter";
import { BookUnverifiedListRelationFilter } from "./BookUnverifiedListRelationFilter";
import { EnumUserRoleEnumFilter } from "./EnumUserRoleEnumFilter";
import { StringFilter } from "./StringFilter";
import { TransactionListRelationFilter } from "./TransactionListRelationFilter";
import { UserRoleRelationFilter } from "./UserRoleRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BookListRelationFilter, {
    nullable: true
  })
  books?: BookListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  profilePictureUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleEnumFilter, {
    nullable: true
  })
  userRoleName?: EnumUserRoleEnumFilter | undefined;

  @TypeGraphQL.Field(_type => UserRoleRelationFilter, {
    nullable: true
  })
  userRole?: UserRoleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TransactionListRelationFilter, {
    nullable: true
  })
  transaction?: TransactionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedListRelationFilter, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedListRelationFilter | undefined;
}
