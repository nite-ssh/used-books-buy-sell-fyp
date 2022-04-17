import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.ObjectType("UserMaxAggregate", {
  isAbstract: true
})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePictureUrl!: string | null;

  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: true
  })
  userRoleName!: "USER" | "ADMIN" | null;
}
