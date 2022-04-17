import * as TypeGraphQL from "type-graphql";
import { UserRoleOrderByWithRelationInput } from "../../../inputs/UserRoleOrderByWithRelationInput";
import { UserRoleWhereInput } from "../../../inputs/UserRoleWhereInput";
import { UserRoleWhereUniqueInput } from "../../../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserRoleArgs {
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
}
