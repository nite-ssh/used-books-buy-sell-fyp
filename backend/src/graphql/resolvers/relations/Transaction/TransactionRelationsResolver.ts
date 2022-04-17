import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookUnverified } from "../../../models/BookUnverified";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Transaction)
export class TransactionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Book, {
    nullable: false
  })
  async book(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<Book> {
    return getPrismaFromContext(ctx).transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).book({});
  }

  @TypeGraphQL.FieldResolver(_type => BookUnverified, {
    nullable: true
  })
  async BookUnverified(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<BookUnverified | null> {
    return getPrismaFromContext(ctx).transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).BookUnverified({});
  }
}
