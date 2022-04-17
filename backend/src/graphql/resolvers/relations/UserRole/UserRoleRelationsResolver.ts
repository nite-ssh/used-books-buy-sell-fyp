import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserRole } from "../../../models/UserRole";
import { UserRoleUserArgs } from "./args/UserRoleUserArgs";
import { getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRole)
export class UserRoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userRole: UserRole, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRoleUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).userRole.findUnique({
      where: {
        name: userRole.name,
      },
    }).user(args);
  }
}
