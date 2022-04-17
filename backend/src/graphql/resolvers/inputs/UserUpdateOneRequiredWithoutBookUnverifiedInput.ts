import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBookUnverifiedInput } from "./UserCreateOrConnectWithoutBookUnverifiedInput";
import { UserCreateWithoutBookUnverifiedInput } from "./UserCreateWithoutBookUnverifiedInput";
import { UserUpdateWithoutBookUnverifiedInput } from "./UserUpdateWithoutBookUnverifiedInput";
import { UserUpsertWithoutBookUnverifiedInput } from "./UserUpsertWithoutBookUnverifiedInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookUnverifiedInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookUnverifiedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBookUnverifiedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBookUnverifiedInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBookUnverifiedInput | undefined;
}
