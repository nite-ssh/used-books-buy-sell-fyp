import * as TypeGraphQL from "type-graphql";
import { User } from "./User";
import { UserRoleEnum } from "../enums/UserRoleEnum";
import { UserRoleCount } from "../resolvers/outputs/UserRoleCount";

@TypeGraphQL.ObjectType("UserRole", {
  isAbstract: true
})
export class UserRole {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: false
  })
  name!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  user?: User[];

  @TypeGraphQL.Field(_type => UserRoleCount, {
    nullable: true
  })
  _count?: UserRoleCount | null;
}
