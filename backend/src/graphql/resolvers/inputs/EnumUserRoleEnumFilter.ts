import * as TypeGraphQL from "type-graphql";
import { NestedEnumUserRoleEnumFilter } from "./NestedEnumUserRoleEnumFilter";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("EnumUserRoleEnumFilter", {
  isAbstract: true
})
export class EnumUserRoleEnumFilter {
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
