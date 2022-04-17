import * as TypeGraphQL from "type-graphql";
import { BookCreateNestedManyWithoutUserInput } from "./BookCreateNestedManyWithoutUserInput";
import { TransactionCreateNestedManyWithoutUserInput } from "./TransactionCreateNestedManyWithoutUserInput";
import { UserRoleCreateNestedOneWithoutUserInput } from "./UserRoleCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class UserCreateWithoutBookUnverifiedInput {
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

  @TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  transaction?: TransactionCreateNestedManyWithoutUserInput | undefined;
}
