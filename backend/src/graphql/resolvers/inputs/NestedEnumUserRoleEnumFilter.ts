import * as TypeGraphQL from "type-graphql";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("NestedEnumUserRoleEnumFilter", {
  isAbstract: true
})
export class NestedEnumUserRoleEnumFilter {
  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: true
  })
  equals?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [UserRoleEnum], {
    nullable: true
  })
  in?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [UserRoleEnum], {
    nullable: true
  })
  notIn?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleEnumFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleEnumFilter | undefined;
}
