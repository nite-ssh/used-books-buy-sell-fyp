import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("UserRoleCountAggregate", {
  isAbstract: true
})
export class UserRoleCountAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  name!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  description!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  _all!: number;
}
