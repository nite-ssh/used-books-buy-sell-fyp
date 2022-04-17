import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutTransactionInput } from "./UserCreateWithoutTransactionInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTransactionInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutTransactionInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: UserCreateWithoutTransactionInput;
}
