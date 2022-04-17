import * as TypeGraphQL from "type-graphql";
import { EnumTransactionStateWithAggregatesFilter } from "./EnumTransactionStateWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "./StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("TransactionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TransactionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  address?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTransactionStateWithAggregatesFilter, {
    nullable: true
  })
  deliveryState?: EnumTransactionStateWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bookId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  bookUnverifiedId?: StringNullableWithAggregatesFilter | undefined;
}
