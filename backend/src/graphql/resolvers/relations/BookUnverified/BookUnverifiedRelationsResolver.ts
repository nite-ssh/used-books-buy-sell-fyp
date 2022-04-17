import * as TypeGraphQL from "type-graphql";
import { BookCategory } from "../../../models/BookCategory";
import { BookState } from "../../../models/BookState";
import { BookUnverified } from "../../../models/BookUnverified";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { BookUnverifiedTransactionArgs } from "./args/BookUnverifiedTransactionArgs";
import { getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookUnverified)
export class BookUnverifiedRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() bookUnverified: BookUnverified, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).bookUnverified.findUnique({
      where: {
        id: bookUnverified.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => BookState, {
    nullable: false
  })
  async bookState(@TypeGraphQL.Root() bookUnverified: BookUnverified, @TypeGraphQL.Ctx() ctx: any): Promise<BookState> {
    return getPrismaFromContext(ctx).bookUnverified.findUnique({
      where: {
        id: bookUnverified.id,
      },
    }).bookState({});
  }

  @TypeGraphQL.FieldResolver(_type => BookCategory, {
    nullable: false
  })
  async bookCategory(@TypeGraphQL.Root() bookUnverified: BookUnverified, @TypeGraphQL.Ctx() ctx: any): Promise<BookCategory> {
    return getPrismaFromContext(ctx).bookUnverified.findUnique({
      where: {
        id: bookUnverified.id,
      },
    }).bookCategory({});
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transaction(@TypeGraphQL.Root() bookUnverified: BookUnverified, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookUnverifiedTransactionArgs): Promise<Transaction[]> {
    return getPrismaFromContext(ctx).bookUnverified.findUnique({
      where: {
        id: bookUnverified.id,
      },
    }).transaction(args);
  }
}
