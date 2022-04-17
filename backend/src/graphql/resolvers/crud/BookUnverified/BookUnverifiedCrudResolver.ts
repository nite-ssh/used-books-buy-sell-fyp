import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { ALLOWED_BOOK_SELL_COUNT } from "../../../../utils/constants.utils";
import { BookStateEnum } from "../../../enums";
import { AggregateBookUnverifiedArgs } from "./args/AggregateBookUnverifiedArgs";
import { CreateBookUnverifiedArgs } from "./args/CreateBookUnverifiedArgs";
import { CreateManyBookUnverifiedArgs } from "./args/CreateManyBookUnverifiedArgs";
import { DeleteBookUnverifiedArgs } from "./args/DeleteBookUnverifiedArgs";
import { DeleteManyBookUnverifiedArgs } from "./args/DeleteManyBookUnverifiedArgs";
import { FindFirstBookUnverifiedArgs } from "./args/FindFirstBookUnverifiedArgs";
import { FindManyBookUnverifiedArgs } from "./args/FindManyBookUnverifiedArgs";
import { FindUniqueBookUnverifiedArgs } from "./args/FindUniqueBookUnverifiedArgs";
import { GroupByBookUnverifiedArgs } from "./args/GroupByBookUnverifiedArgs";
import { UpdateBookUnverifiedArgs } from "./args/UpdateBookUnverifiedArgs";
import { UpdateManyBookUnverifiedArgs } from "./args/UpdateManyBookUnverifiedArgs";
import { UpsertBookUnverifiedArgs } from "./args/UpsertBookUnverifiedArgs";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { BookUnverified } from "../../../models/BookUnverified";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookUnverified } from "../../outputs/AggregateBookUnverified";
import { BookUnverifiedGroupBy } from "../../outputs/BookUnverifiedGroupBy";

@TypeGraphQL.Resolver((_of) => BookUnverified)
export class BookUnverifiedCrudResolver {
  @TypeGraphQL.Query((_returns) => BookUnverified, {
    nullable: true,
  })
  async bookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookUnverifiedArgs,
  ): Promise<BookUnverified | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => BookUnverified, {
    nullable: true,
  })
  async findFirstBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookUnverifiedArgs,
  ): Promise<BookUnverified | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [BookUnverified], {
    nullable: false,
  })
  async bookUnverifieds(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookUnverifiedArgs,
  ): Promise<BookUnverified[]> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookUnverified, {
    nullable: false,
  })
  async createBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookUnverifiedArgs,
  ): Promise<BookUnverified> {
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

    return getPrismaFromContext(ctx).bookUnverified.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookUnverifiedArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookUnverified, {
    nullable: true,
  })
  async deleteBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookUnverifiedArgs,
  ): Promise<BookUnverified | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookUnverified, {
    nullable: true,
  })
  async updateBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookUnverifiedArgs,
  ): Promise<BookUnverified | null> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookUnverifiedArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookUnverifiedArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookUnverified, {
    nullable: false,
  })
  async upsertBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookUnverifiedArgs,
  ): Promise<BookUnverified> {
    const { _count } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateBookUnverified, {
    nullable: false,
  })
  async aggregateBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookUnverifiedArgs,
  ): Promise<AggregateBookUnverified> {
    return getPrismaFromContext(ctx).bookUnverified.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query((_returns) => [BookUnverifiedGroupBy], {
    nullable: false,
  })
  async groupByBookUnverified(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookUnverifiedArgs,
  ): Promise<BookUnverifiedGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookUnverified.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) =>
          v != null
        ),
      ),
    });
  }
}
