import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutUserInput } from "./BookCreateWithoutUserInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookCreateWithoutUserInput;
}
