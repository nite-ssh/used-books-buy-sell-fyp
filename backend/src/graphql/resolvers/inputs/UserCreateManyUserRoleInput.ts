import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("UserCreateManyUserRoleInput", {
  isAbstract: true
})
export class UserCreateManyUserRoleInput {
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
}
