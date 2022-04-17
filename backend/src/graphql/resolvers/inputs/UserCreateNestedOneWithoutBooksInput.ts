import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBooksInput } from "./UserCreateOrConnectWithoutBooksInput";
import { UserCreateWithoutBooksInput } from "./UserCreateWithoutBooksInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBooksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBooksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBooksInput, {
    nullable: true
  })
  create?: UserCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
