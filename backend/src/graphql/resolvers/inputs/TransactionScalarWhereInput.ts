import * as TypeGraphQL from "type-graphql";
import { EnumTransactionStateFilter } from "./EnumTransactionStateFilter";
import { StringFilter } from "./StringFilter";
import { StringNullableFilter } from "./StringNullableFilter";

@TypeGraphQL.InputType("TransactionScalarWhereInput", {
  isAbstract: true
})
export class TransactionScalarWhereInput {
  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  AND?: TransactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  OR?: TransactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  NOT?: TransactionScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bookUnverifiedId?: StringNullableFilter | undefined;
}
