import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutTransactionInput } from "./UserCreateOrConnectWithoutTransactionInput";
import { UserCreateWithoutTransactionInput } from "./UserCreateWithoutTransactionInput";
import { UserUpdateWithoutTransactionInput } from "./UserUpdateWithoutTransactionInput";
import { UserUpsertWithoutTransactionInput } from "./UserUpsertWithoutTransactionInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTransactionInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTransactionInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: UserCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTransactionInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTransactionInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTransactionInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTransactionInput | undefined;
}
