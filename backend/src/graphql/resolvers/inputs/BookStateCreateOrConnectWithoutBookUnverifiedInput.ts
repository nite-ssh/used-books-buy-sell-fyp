import * as TypeGraphQL from "type-graphql";
import { BookStateCreateWithoutBookUnverifiedInput } from "./BookStateCreateWithoutBookUnverifiedInput";
import { BookStateWhereUniqueInput } from "./BookStateWhereUniqueInput";

@TypeGraphQL.InputType("BookStateCreateOrConnectWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookStateCreateOrConnectWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: false
  })
  where!: BookStateWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookStateCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: BookStateCreateWithoutBookUnverifiedInput;
}
