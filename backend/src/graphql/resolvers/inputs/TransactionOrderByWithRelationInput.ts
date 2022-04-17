import * as TypeGraphQL from "type-graphql";
import { BookOrderByWithRelationInput } from "./BookOrderByWithRelationInput";
import { BookUnverifiedOrderByWithRelationInput } from "./BookUnverifiedOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "./UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TransactionOrderByWithRelationInput", {
  isAbstract: true
})
export class TransactionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deliveryState?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BookOrderByWithRelationInput, {
    nullable: true
  })
  book?: BookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedOrderByWithRelationInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookUnverifiedId?: "asc" | "desc" | undefined;
}
