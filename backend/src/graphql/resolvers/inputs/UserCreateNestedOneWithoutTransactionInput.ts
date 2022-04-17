import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutTransactionInput } from "./UserCreateOrConnectWithoutTransactionInput";
import { UserCreateWithoutTransactionInput } from "./UserCreateWithoutTransactionInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTransactionInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTransactionInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: UserCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTransactionInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
