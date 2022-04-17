import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutTransactionInput } from "./UserCreateWithoutTransactionInput";
import { UserUpdateWithoutTransactionInput } from "./UserUpdateWithoutTransactionInput";

@TypeGraphQL.InputType("UserUpsertWithoutTransactionInput", {
  isAbstract: true
})
export class UserUpsertWithoutTransactionInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTransactionInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTransactionInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: UserCreateWithoutTransactionInput;
}
