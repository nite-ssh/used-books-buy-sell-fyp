import * as TypeGraphQL from "type-graphql";
import { UserRoleCountAggregate } from "./UserRoleCountAggregate";
import { UserRoleMaxAggregate } from "./UserRoleMaxAggregate";
import { UserRoleMinAggregate } from "./UserRoleMinAggregate";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.ObjectType("UserRoleGroupBy", {
  isAbstract: true
})
export class UserRoleGroupBy {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: false
  })
  name!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

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
