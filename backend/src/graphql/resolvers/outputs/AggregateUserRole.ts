import * as TypeGraphQL from "type-graphql";
import { UserRoleCountAggregate } from "./UserRoleCountAggregate";
import { UserRoleMaxAggregate } from "./UserRoleMaxAggregate";
import { UserRoleMinAggregate } from "./UserRoleMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserRole", {
  isAbstract: true
})
export class AggregateUserRole {
  @TypeGraphQL.Field(_type => UserRoleCountAggregate, {
    nullable: true
  })
  _count!: UserRoleCountAggregate | null;

  @TypeGraphQL.Field(_type => UserRoleMinAggregate, {
    nullable: true
  })
  _min!: UserRoleMinAggregate | null;

  @TypeGraphQL.Field(_type => UserRoleMaxAggregate, {
    nullable: true
  })
  _max!: UserRoleMaxAggregate | null;
}
