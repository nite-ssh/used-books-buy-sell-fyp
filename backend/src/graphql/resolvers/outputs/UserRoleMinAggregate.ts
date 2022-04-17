import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.ObjectType("UserRoleMinAggregate", {
  isAbstract: true
})
export class UserRoleMinAggregate {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: true
  })
  name!: "USER" | "ADMIN" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;
}
