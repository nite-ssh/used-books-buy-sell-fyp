import * as TypeGraphQL from "type-graphql";
import { BookRelationFilter } from "./BookRelationFilter";
import { BookUnverifiedRelationFilter } from "./BookUnverifiedRelationFilter";
import { EnumTransactionStateFilter } from "./EnumTransactionStateFilter";
import { StringFilter } from "./StringFilter";
import { StringNullableFilter } from "./StringNullableFilter";
import { UserRelationFilter } from "./UserRelationFilter";

@TypeGraphQL.InputType("TransactionWhereInput", {
  isAbstract: true
})
export class TransactionWhereInput {
  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  AND?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  OR?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  NOT?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTransactionStateFilter, {
    nullable: true
  })
  deliveryState?: EnumTransactionStateFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookRelationFilter, {
    nullable: true
  })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedRelationFilter, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bookUnverifiedId?: StringNullableFilter | undefined;
}
