import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutTransactionInput } from "./BookCreateWithoutTransactionInput";
import { BookUpdateWithoutTransactionInput } from "./BookUpdateWithoutTransactionInput";

@TypeGraphQL.InputType("BookUpsertWithoutTransactionInput", {
  isAbstract: true
})
export class BookUpsertWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutTransactionInput, {
    nullable: false
  })
  update!: BookUpdateWithoutTransactionInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: BookCreateWithoutTransactionInput;
}
