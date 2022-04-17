import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateOrConnectWithoutTransactionInput } from "./BookUnverifiedCreateOrConnectWithoutTransactionInput";
import { BookUnverifiedCreateWithoutTransactionInput } from "./BookUnverifiedCreateWithoutTransactionInput";
import { BookUnverifiedUpdateWithoutTransactionInput } from "./BookUnverifiedUpdateWithoutTransactionInput";
import { BookUnverifiedUpsertWithoutTransactionInput } from "./BookUnverifiedUpsertWithoutTransactionInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateOneWithoutTransactionInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateOneWithoutTransactionInput {
  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateOrConnectWithoutTransactionInput, {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedUpsertWithoutTransactionInput, {
    nullable: true
  })
  upsert?: BookUnverifiedUpsertWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: true
  })
  connect?: BookUnverifiedWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateWithoutTransactionInput, {
    nullable: true
  })
  update?: BookUnverifiedUpdateWithoutTransactionInput | undefined;
}
