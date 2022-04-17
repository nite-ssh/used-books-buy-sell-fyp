import * as TypeGraphQL from "type-graphql";
import { UserCountAggregate } from "./UserCountAggregate";
import { UserMaxAggregate } from "./UserMaxAggregate";
import { UserMinAggregate } from "./UserMinAggregate";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.ObjectType("UserGroupBy", {
  isAbstract: true
})
export class UserGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
    nullable: false
  })
  profilePictureUrl!: string;

  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: false
  })
  userRoleName!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
