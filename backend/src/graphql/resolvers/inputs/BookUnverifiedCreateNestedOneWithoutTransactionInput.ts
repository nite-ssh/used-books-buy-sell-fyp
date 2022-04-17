import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateOrConnectWithoutTransactionInput } from "./BookUnverifiedCreateOrConnectWithoutTransactionInput";
import { BookUnverifiedCreateWithoutTransactionInput } from "./BookUnverifiedCreateWithoutTransactionInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateNestedOneWithoutTransactionInput", {
  isAbstract: true
})
export class BookUnverifiedCreateNestedOneWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateOrConnectWithoutTransactionInput, {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: true
  })
  connect?: BookUnverifiedWhereUniqueInput | undefined;
}
