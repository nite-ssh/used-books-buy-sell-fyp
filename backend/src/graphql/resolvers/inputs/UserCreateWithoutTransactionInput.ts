import * as TypeGraphQL from "type-graphql";
import { BookCreateNestedManyWithoutUserInput } from "./BookCreateNestedManyWithoutUserInput";
import { BookUnverifiedCreateNestedManyWithoutUserInput } from "./BookUnverifiedCreateNestedManyWithoutUserInput";
import { UserRoleCreateNestedOneWithoutUserInput } from "./UserRoleCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutTransactionInput", {
  isAbstract: true
})
export class UserCreateWithoutTransactionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePictureUrl?: string | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleCreateNestedOneWithoutUserInput, {
    nullable: false
  })
  userRole!: UserRoleCreateNestedOneWithoutUserInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedCreateNestedManyWithoutUserInput | undefined;
}
