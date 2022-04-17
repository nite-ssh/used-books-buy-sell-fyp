import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookCategory } from "../../../models/BookCategory";
import { BookState } from "../../../models/BookState";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { BookTransactionArgs } from "./args/BookTransactionArgs";
import { getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => BookState, {
    nullable: false
  })
  async bookState(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<BookState> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).bookState({});
  }

  @TypeGraphQL.FieldResolver(_type => BookCategory, {
    nullable: false
  })
  async bookCategory(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<BookCategory> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).bookCategory({});
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transaction(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookTransactionArgs): Promise<Transaction[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).transaction(args);
  }
}
