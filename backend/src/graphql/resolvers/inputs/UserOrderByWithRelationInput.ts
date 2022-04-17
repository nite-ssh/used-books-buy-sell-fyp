import * as TypeGraphQL from "type-graphql";
import { BookOrderByRelationAggregateInput } from "./BookOrderByRelationAggregateInput";
import { BookUnverifiedOrderByRelationAggregateInput } from "./BookUnverifiedOrderByRelationAggregateInput";
import { TransactionOrderByRelationAggregateInput } from "./TransactionOrderByRelationAggregateInput";
import { UserRoleOrderByWithRelationInput } from "./UserRoleOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookOrderByRelationAggregateInput, {
    nullable: true
  })
  books?: BookOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  profilePictureUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userRoleName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserRoleOrderByWithRelationInput, {
    nullable: true
  })
  userRole?: UserRoleOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TransactionOrderByRelationAggregateInput, {
    nullable: true
  })
  transaction?: TransactionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedOrderByRelationAggregateInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedOrderByRelationAggregateInput | undefined;
}
