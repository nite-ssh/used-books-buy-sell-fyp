import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBooksInput } from "./UserCreateWithoutBooksInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBooksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutBooksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBooksInput, {
    nullable: false
  })
  create!: UserCreateWithoutBooksInput;
}
