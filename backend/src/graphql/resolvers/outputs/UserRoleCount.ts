import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("UserRoleCount", {
  isAbstract: true
})
export class UserRoleCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user!: number;
}
