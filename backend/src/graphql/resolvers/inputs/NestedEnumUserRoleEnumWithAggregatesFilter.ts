import * as TypeGraphQL from "type-graphql";
import { NestedEnumUserRoleEnumFilter } from "./NestedEnumUserRoleEnumFilter";
import { NestedIntFilter } from "./NestedIntFilter";
import { UserRoleEnum } from "../../enums/UserRoleEnum";

@TypeGraphQL.InputType("NestedEnumUserRoleEnumWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumUserRoleEnumWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumUserRoleEnumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleEnumFilter, {
    nullable: true
  })
  _min?: NestedEnumUserRoleEnumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleEnumFilter, {
    nullable: true
  })
  _max?: NestedEnumUserRoleEnumFilter | undefined;
}
