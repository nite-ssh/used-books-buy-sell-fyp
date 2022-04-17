import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBookUnverifiedInput } from "./UserCreateWithoutBookUnverifiedInput";
import { UserUpdateWithoutBookUnverifiedInput } from "./UserUpdateWithoutBookUnverifiedInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class UserUpsertWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBookUnverifiedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBookUnverifiedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookUnverifiedInput;
}
