import * as TypeGraphQL from "type-graphql";
import { BookStateCreateOrConnectWithoutBooksInput } from "./BookStateCreateOrConnectWithoutBooksInput";
import { BookStateCreateWithoutBooksInput } from "./BookStateCreateWithoutBooksInput";
import { BookStateUpdateWithoutBooksInput } from "./BookStateUpdateWithoutBooksInput";
import { BookStateUpsertWithoutBooksInput } from "./BookStateUpsertWithoutBooksInput";
import { BookStateWhereUniqueInput } from "./BookStateWhereUniqueInput";

@TypeGraphQL.InputType("BookStateUpdateOneRequiredWithoutBooksInput", {
  isAbstract: true
})
export class BookStateUpdateOneRequiredWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookStateCreateWithoutBooksInput, {
    nullable: true
  })
  create?: BookStateCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookStateCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: BookStateCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookStateUpsertWithoutBooksInput, {
    nullable: true
  })
  upsert?: BookStateUpsertWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: true
  })
  connect?: BookStateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookStateUpdateWithoutBooksInput, {
    nullable: true
  })
  update?: BookStateUpdateWithoutBooksInput | undefined;
}
