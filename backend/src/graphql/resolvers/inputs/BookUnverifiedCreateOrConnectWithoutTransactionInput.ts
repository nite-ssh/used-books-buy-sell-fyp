import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutTransactionInput } from "./BookUnverifiedCreateWithoutTransactionInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateOrConnectWithoutTransactionInput", {
  isAbstract: true
})
export class BookUnverifiedCreateOrConnectWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutTransactionInput;
}
