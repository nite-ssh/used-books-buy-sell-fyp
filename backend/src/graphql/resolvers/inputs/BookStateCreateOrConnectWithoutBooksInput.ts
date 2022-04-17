import * as TypeGraphQL from "type-graphql";
import { BookStateCreateWithoutBooksInput } from "./BookStateCreateWithoutBooksInput";
import { BookStateWhereUniqueInput } from "./BookStateWhereUniqueInput";

@TypeGraphQL.InputType("BookStateCreateOrConnectWithoutBooksInput", {
  isAbstract: true
})
export class BookStateCreateOrConnectWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: false
  })
  where!: BookStateWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookStateCreateWithoutBooksInput, {
    nullable: false
  })
  create!: BookStateCreateWithoutBooksInput;
}
