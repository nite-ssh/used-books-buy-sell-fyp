import * as TypeGraphQL from "type-graphql";
import { BookStateCreateWithoutBookUnverifiedInput } from "./BookStateCreateWithoutBookUnverifiedInput";
import { BookStateUpdateWithoutBookUnverifiedInput } from "./BookStateUpdateWithoutBookUnverifiedInput";

@TypeGraphQL.InputType("BookStateUpsertWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookStateUpsertWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookStateUpdateWithoutBookUnverifiedInput, {
    nullable: false
  })
  update!: BookStateUpdateWithoutBookUnverifiedInput;

  @TypeGraphQL.Field(_type => BookStateCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: BookStateCreateWithoutBookUnverifiedInput;
}
