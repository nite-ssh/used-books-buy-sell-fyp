import * as TypeGraphQL from "type-graphql";
import { UserCreateManyUserRoleInput } from "./UserCreateManyUserRoleInput";

@TypeGraphQL.InputType("UserCreateManyUserRoleInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyUserRoleInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyUserRoleInput], {
    nullable: false
  })
  data!: UserCreateManyUserRoleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
