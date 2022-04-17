import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookState } from "../../../models/BookState";
import { BookUnverified } from "../../../models/BookUnverified";
import { BookStateBookUnverifiedArgs } from "./args/BookStateBookUnverifiedArgs";
import { BookStateBooksArgs } from "./args/BookStateBooksArgs";
import { getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookState)
export class BookStateRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() bookState: BookState, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookStateBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).bookState.findUnique({
      where: {
        name: bookState.name,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookUnverified], {
    nullable: false
  })
  async BookUnverified(@TypeGraphQL.Root() bookState: BookState, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookStateBookUnverifiedArgs): Promise<BookUnverified[]> {
    return getPrismaFromContext(ctx).bookState.findUnique({
      where: {
        name: bookState.name,
      },
    }).BookUnverified(args);
  }
}
