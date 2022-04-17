import * as TypeGraphQL from "type-graphql";
import { BookCreateOrConnectWithoutTransactionInput } from "./BookCreateOrConnectWithoutTransactionInput";
import { BookCreateWithoutTransactionInput } from "./BookCreateWithoutTransactionInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutTransactionInput", {
  isAbstract: true
})
export class BookCreateNestedOneWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: BookCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutTransactionInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;
}
