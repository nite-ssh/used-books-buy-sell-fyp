import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("SignInUserInput", {
  isAbstract: true,
})
export class SignInUserInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password: string;
}
