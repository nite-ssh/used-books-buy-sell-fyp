import * as TypeGraphQL from "type-graphql";
import { UserRoleCreateOrConnectWithoutUserInput } from "./UserRoleCreateOrConnectWithoutUserInput";
import { UserRoleCreateWithoutUserInput } from "./UserRoleCreateWithoutUserInput";
import { UserRoleUpdateWithoutUserInput } from "./UserRoleUpdateWithoutUserInput";
import { UserRoleUpsertWithoutUserInput } from "./UserRoleUpsertWithoutUserInput";
import { UserRoleWhereUniqueInput } from "./UserRoleWhereUniqueInput";

@TypeGraphQL.InputType("UserRoleUpdateOneRequiredWithoutUserInput", {
  isAbstract: true
})
export class UserRoleUpdateOneRequiredWithoutUserInput {
  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUserInput, {
    nullable: true
  })
  create?: UserRoleCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: UserRoleUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: true
  })
  connect?: UserRoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleUpdateWithoutUserInput, {
    nullable: true
  })
  update?: UserRoleUpdateWithoutUserInput | undefined;
}
