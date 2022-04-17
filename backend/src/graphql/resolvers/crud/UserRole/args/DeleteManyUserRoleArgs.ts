import * as TypeGraphQL from "type-graphql";
import { UserRoleWhereInput } from "../../../inputs/UserRoleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  where?: UserRoleWhereInput | undefined;
}
