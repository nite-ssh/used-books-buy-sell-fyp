import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutBookStateInput } from "./BookUnverifiedCreateWithoutBookStateInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateOrConnectWithoutBookStateInput", {
  isAbstract: true
})
export class BookUnverifiedCreateOrConnectWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutBookStateInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutBookStateInput;
}
