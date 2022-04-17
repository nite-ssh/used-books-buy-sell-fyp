import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBooksInput } from "./UserCreateWithoutBooksInput";
import { UserUpdateWithoutBooksInput } from "./UserUpdateWithoutBooksInput";

@TypeGraphQL.InputType("UserUpsertWithoutBooksInput", {
  isAbstract: true
})
export class UserUpsertWithoutBooksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBooksInput, {
    nullable: false
  })
  create!: UserCreateWithoutBooksInput;
}
