import * as TypeGraphQL from "type-graphql";
import { UserRoleOrderByWithRelationInput } from "../../../inputs/UserRoleOrderByWithRelationInput";
import { UserRoleWhereInput } from "../../../inputs/UserRoleWhereInput";
import { UserRoleWhereUniqueInput } from "../../../inputs/UserRoleWhereUniqueInput";
import { UserRoleScalarFieldEnum } from "../../../../enums/UserRoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  where?: UserRoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserRoleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserRoleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserRoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserRoleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"name" | "description"> | undefined;
}
