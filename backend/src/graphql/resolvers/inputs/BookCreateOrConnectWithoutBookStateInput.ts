import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutBookStateInput } from "./BookCreateWithoutBookStateInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutBookStateInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBookStateInput, {
    nullable: false
  })
  create!: BookCreateWithoutBookStateInput;
}
