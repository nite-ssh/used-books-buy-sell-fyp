import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { ALLOWED_BOOK_SELL_COUNT } from "../../../../utils/constants.utils";
import { AggregateBookArgs } from "./args/AggregateBookArgs";
import { CreateBookArgs } from "./args/CreateBookArgs";
import { CreateManyBookArgs } from "./args/CreateManyBookArgs";
import { DeleteBookArgs } from "./args/DeleteBookArgs";
import { DeleteManyBookArgs } from "./args/DeleteManyBookArgs";
import { FindFirstBookArgs } from "./args/FindFirstBookArgs";
import { FindManyBookArgs } from "./args/FindManyBookArgs";
import { FindUniqueBookArgs } from "./args/FindUniqueBookArgs";
import { GroupByBookArgs } from "./args/GroupByBookArgs";
import { UpdateBookArgs } from "./args/UpdateBookArgs";
import { UpdateManyBookArgs } from "./args/UpdateManyBookArgs";
import { UpsertBookArgs } from "./args/UpsertBookArgs";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Book } from "../../../models/Book";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBook } from "../../outputs/AggregateBook";
import { BookGroupBy } from "../../outputs/BookGroupBy";
import { BookStateEnum } from "../../../enums";

@TypeGraphQL.Resolver((_of) => Book)
export class BookCrudResolver {
  @TypeGraphQL.Query((_returns) => Book, {
    nullable: true,
  })
  async book(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookArgs,
  ): Promise<Book | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Book, {
    nullable: true,
  })
  async findFirstBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookArgs,
  ): Promise<Book | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Book], {
    nullable: false,
  })
  async books(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookArgs,
  ): Promise<Book[]> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Book, {
    nullable: false,
  })
  async createBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookArgs,
  ): Promise<Book> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );

    const { _all } = (await getPrismaFromContext(ctx).book.aggregate({
      where: {
        userId: {
          // @ts-expect-error
          equals: args.data.user.connect.id,
        },
        bookStateName: {
          in: [BookStateEnum.TO_BE_SOLD, BookStateEnum.SOLD],
        },
      },
      _count: {
        _all: true,
      },
    }))._count;

    if (
      _all &&
      _all % ALLOWED_BOOK_SELL_COUNT === 0 &&
      // @ts-expect-error
      args.data.bookState.connect.name !== BookStateEnum.TO_BE_DONATED
    ) {
      throw Error("You have to donate the next book.");
    }

    return getPrismaFromContext(ctx).book.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Book, {
    nullable: true,
  })
  async deleteBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookArgs,
  ): Promise<Book | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Book, {
    nullable: true,
  })
  async updateBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookArgs,
  ): Promise<Book | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Book, {
    nullable: false,
  })
  async upsertBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookArgs,
  ): Promise<Book> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateBook, {
    nullable: false,
  })
  async aggregateBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookArgs,
  ): Promise<AggregateBook> {
    return getPrismaFromContext(ctx).book.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query((_returns) => [BookGroupBy], {
    nullable: false,
  })
  async groupByBook(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookArgs,
  ): Promise<BookGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).book.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) =>
          v != null
        ),
      ),
    });
  }
}
