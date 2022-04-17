import * as TypeGraphQL from "type-graphql";
import { BookCreateOrConnectWithoutTransactionInput } from "./BookCreateOrConnectWithoutTransactionInput";
import { BookCreateWithoutTransactionInput } from "./BookCreateWithoutTransactionInput";
import { BookUpdateWithoutTransactionInput } from "./BookUpdateWithoutTransactionInput";
import { BookUpsertWithoutTransactionInput } from "./BookUpsertWithoutTransactionInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutTransactionInput", {
  isAbstract: true
})
export class BookUpdateOneRequiredWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: BookCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutTransactionInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutTransactionInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutTransactionInput, {
    nullable: true
  })
  update?: BookUpdateWithoutTransactionInput | undefined;
}
