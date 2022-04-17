import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutTransactionInput } from "./BookUnverifiedCreateWithoutTransactionInput";
import { BookUnverifiedUpdateWithoutTransactionInput } from "./BookUnverifiedUpdateWithoutTransactionInput";

@TypeGraphQL.InputType("BookUnverifiedUpsertWithoutTransactionInput", {
  isAbstract: true
})
export class BookUnverifiedUpsertWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutTransactionInput, {
    nullable: false
  })
  update!: BookUnverifiedUpdateWithoutTransactionInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutTransactionInput;
}
