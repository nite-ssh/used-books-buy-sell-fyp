import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBookUnverifiedInput } from "./UserCreateWithoutBookUnverifiedInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookUnverifiedInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookUnverifiedInput;
}
