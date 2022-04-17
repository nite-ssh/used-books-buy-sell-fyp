import * as TypeGraphQL from "type-graphql";
import { BookCategoryOrderByWithRelationInput } from "./BookCategoryOrderByWithRelationInput";
import { BookStateOrderByWithRelationInput } from "./BookStateOrderByWithRelationInput";
import { TransactionOrderByRelationAggregateInput } from "./TransactionOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "./UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookOrderByWithRelationInput", {
  isAbstract: true
})
export class BookOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookPhoto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookStateName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookCategoryName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BookStateOrderByWithRelationInput, {
    nullable: true
  })
  bookState?: BookStateOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryOrderByWithRelationInput, {
    nullable: true
  })
  bookCategory?: BookCategoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TransactionOrderByRelationAggregateInput, {
    nullable: true
  })
  transaction?: TransactionOrderByRelationAggregateInput | undefined;
}
