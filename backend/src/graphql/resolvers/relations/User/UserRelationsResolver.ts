import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookUnverified } from "../../../models/BookUnverified";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { UserRole } from "../../../models/UserRole";
import { UserBookUnverifiedArgs } from "./args/UserBookUnverifiedArgs";
import { UserBooksArgs } from "./args/UserBooksArgs";
import { UserTransactionArgs } from "./args/UserTransactionArgs";
import { getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => UserRole, {
    nullable: false
  })
  async userRole(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserRole> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).userRole({});
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transaction(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTransactionArgs): Promise<Transaction[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).transaction(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookUnverified], {
    nullable: false
  })
  async BookUnverified(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBookUnverifiedArgs): Promise<BookUnverified[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).BookUnverified(args);
  }
}
