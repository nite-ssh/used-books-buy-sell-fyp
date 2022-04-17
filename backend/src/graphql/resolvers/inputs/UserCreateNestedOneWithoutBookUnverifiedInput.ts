import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBookUnverifiedInput } from "./UserCreateOrConnectWithoutBookUnverifiedInput";
import { UserCreateWithoutBookUnverifiedInput } from "./UserCreateWithoutBookUnverifiedInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookUnverifiedInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookUnverifiedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
