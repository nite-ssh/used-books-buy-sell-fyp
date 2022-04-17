import * as TypeGraphQL from "type-graphql";
import { UserRoleWhereUniqueInput } from "../../../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: false
  })
  where!: UserRoleWhereUniqueInput;
}
