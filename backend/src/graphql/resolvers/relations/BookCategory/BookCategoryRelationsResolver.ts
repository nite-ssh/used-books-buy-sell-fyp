import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookCategory } from "../../../models/BookCategory";
import { BookUnverified } from "../../../models/BookUnverified";
import { BookCategoryBookUnverifiedArgs } from "./args/BookCategoryBookUnverifiedArgs";
import { BookCategoryBooksArgs } from "./args/BookCategoryBooksArgs";
import { getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookCategory)
export class BookCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() bookCategory: BookCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookCategoryBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).bookCategory.findUnique({
      where: {
        name: bookCategory.name,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookUnverified], {
    nullable: false
  })
  async BookUnverified(@TypeGraphQL.Root() bookCategory: BookCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookCategoryBookUnverifiedArgs): Promise<BookUnverified[]> {
    return getPrismaFromContext(ctx).bookCategory.findUnique({
      where: {
        name: bookCategory.name,
      },
    }).BookUnverified(args);
  }
}
