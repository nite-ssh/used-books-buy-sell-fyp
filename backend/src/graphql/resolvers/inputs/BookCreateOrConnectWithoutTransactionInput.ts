import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutTransactionInput } from "./BookCreateWithoutTransactionInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutTransactionInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: BookCreateWithoutTransactionInput;
}
