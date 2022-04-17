import * as TypeGraphQL from "type-graphql";
import { Book } from "./Book";
import { BookUnverified } from "./BookUnverified";
import { User } from "./User";
import { TransactionState } from "../enums/TransactionState";

@TypeGraphQL.ObjectType("Transaction", {
  isAbstract: true
})
export class Transaction {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => TransactionState, {
    nullable: false
  })
  deliveryState!: "ORDER_PLACED" | "IN_INVENTORY" | "OUT_FOR_DELIVERY" | "DELIVERED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookId!: string;

  user?: User;

  book?: Book;

  BookUnverified?: BookUnverified | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookUnverifiedId?: string | null;
}
