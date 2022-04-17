import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.ObjectType("UserRoleMaxAggregate", {
  isAbstract: true
})
export class UserRoleMaxAggregate {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: true
  })
  name!: "USER" | "ADMIN" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;
}
