import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBooksInput } from "./UserCreateOrConnectWithoutBooksInput";
import { UserCreateWithoutBooksInput } from "./UserCreateWithoutBooksInput";
import { UserUpdateWithoutBooksInput } from "./UserUpdateWithoutBooksInput";
import { UserUpsertWithoutBooksInput } from "./UserUpsertWithoutBooksInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBooksInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBooksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBooksInput, {
    nullable: true
  })
  create?: UserCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBooksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBooksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBooksInput | undefined;
}
