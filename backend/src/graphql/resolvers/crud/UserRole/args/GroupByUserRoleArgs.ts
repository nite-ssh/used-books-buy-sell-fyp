import * as TypeGraphQL from "type-graphql";
import { UserRoleOrderByWithAggregationInput } from "../../../inputs/UserRoleOrderByWithAggregationInput";
import { UserRoleScalarWhereWithAggregatesInput } from "../../../inputs/UserRoleScalarWhereWithAggregatesInput";
import { UserRoleWhereInput } from "../../../inputs/UserRoleWhereInput";
import { UserRoleScalarFieldEnum } from "../../../../enums/UserRoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  where?: UserRoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserRoleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserRoleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"name" | "description">;

  @TypeGraphQL.Field(_type => UserRoleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserRoleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
