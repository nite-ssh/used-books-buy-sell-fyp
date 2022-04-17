import * as TypeGraphQL from "type-graphql";
import { BookStateCreateOrConnectWithoutBooksInput } from "./BookStateCreateOrConnectWithoutBooksInput";
import { BookStateCreateWithoutBooksInput } from "./BookStateCreateWithoutBooksInput";
import { BookStateWhereUniqueInput } from "./BookStateWhereUniqueInput";

@TypeGraphQL.InputType("BookStateCreateNestedOneWithoutBooksInput", {
  isAbstract: true
})
export class BookStateCreateNestedOneWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookStateCreateWithoutBooksInput, {
    nullable: true
  })
  create?: BookStateCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookStateCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: BookStateCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: true
  })
  connect?: BookStateWhereUniqueInput | undefined;
}
