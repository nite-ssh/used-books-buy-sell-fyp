import * as TypeGraphQL from "type-graphql";
import { UserCreateManyUserRoleInputEnvelope } from "./UserCreateManyUserRoleInputEnvelope";
import { UserCreateOrConnectWithoutUserRoleInput } from "./UserCreateOrConnectWithoutUserRoleInput";
import { UserCreateWithoutUserRoleInput } from "./UserCreateWithoutUserRoleInput";
import { UserScalarWhereInput } from "./UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutUserRoleInput } from "./UserUpdateManyWithWhereWithoutUserRoleInput";
import { UserUpdateWithWhereUniqueWithoutUserRoleInput } from "./UserUpdateWithWhereUniqueWithoutUserRoleInput";
import { UserUpsertWithWhereUniqueWithoutUserRoleInput } from "./UserUpsertWithWhereUniqueWithoutUserRoleInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutUserRoleInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutUserRoleInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUserRoleInput], {
    nullable: true
  })
  create?: UserCreateWithoutUserRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUserRoleInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutUserRoleInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyUserRoleInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyUserRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutUserRoleInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutUserRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutUserRoleInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
