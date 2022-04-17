import * as TypeGraphQL from "type-graphql";
import { UserCreateManyUserRoleInputEnvelope } from "./UserCreateManyUserRoleInputEnvelope";
import { UserCreateOrConnectWithoutUserRoleInput } from "./UserCreateOrConnectWithoutUserRoleInput";
import { UserCreateWithoutUserRoleInput } from "./UserCreateWithoutUserRoleInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutUserRoleInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutUserRoleInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUserRoleInput], {
    nullable: true
  })
  create?: UserCreateWithoutUserRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUserRoleInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyUserRoleInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyUserRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
