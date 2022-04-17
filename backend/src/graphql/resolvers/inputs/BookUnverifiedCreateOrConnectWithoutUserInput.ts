import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateWithoutUserInput } from "./BookUnverifiedCreateWithoutUserInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BookUnverifiedCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateWithoutUserInput;
}
