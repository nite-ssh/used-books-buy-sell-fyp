import argon2 from "argon2";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import { UploadApiResponse, v2 as getCloudinary } from "cloudinary";
import { userMapper } from "../../../../mappers/user.mapper";
import { GraphqlContext } from "../../../configs";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { User } from "../../../models/User";
import { UserWithToken } from "../../../models/UserWithToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { SignInUserArgs } from "./args/SignInUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { UpsertUserArgs } from "./args/UpsertUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UserCrudResolver {
  @TypeGraphQL.Query((_returns) => User, {
    nullable: true,
  })
  async user(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => User, {
    nullable: true,
  })
  async findFirstUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [User], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyUserArgs,
  ): Promise<User[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => UserWithToken, {
    nullable: false,
  })
  async createUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateUserArgs,
  ): Promise<UserWithToken> {
    // eslint-disable-next-line no-param-reassign
    args.data.password = await argon2.hash(args.data.password);
    const { _count } = transformFields(graphqlFields(info as any));
    const user = await getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    return userMapper(user);
  }

  @TypeGraphQL.Mutation((_returns) => UserWithToken, {
    nullable: false,
  })
  async signInUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: SignInUserArgs,
  ): Promise<UserWithToken | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    const user: User = await getPrismaFromContext(ctx).user.findUnique({
      where: {
        username: args.data.username,
      },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const match = await argon2.verify(user.password, args.data.password);

    if (!match) {
      throw new Error("Invalid Credentials");
    }

    return userMapper(user);
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: true,
  })
  async deleteUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: true,
  })
  async updateUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false,
  })
  async upsertUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertUserArgs,
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateUser, {
    nullable: false,
  })
  async aggregateUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUserArgs,
  ): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query((_returns) => [UserGroupBy], {
    nullable: false,
  })
  async groupByUser(
    @TypeGraphQL.Ctx() ctx: GraphqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUserArgs,
  ): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) =>
          v != null
        ),
      ),
    });
  }

  @TypeGraphQL.Mutation(() => String)
  async postPicture(
    @TypeGraphQL.Arg("file", () => GraphQLUpload) {
      createReadStream,
    }: FileUpload,
  ): Promise<String> {
    getCloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const imageData: UploadApiResponse = await new Promise(
      (resolve, reject) => {
        createReadStream()
          .pipe(
            getCloudinary.uploader.upload_stream({
              resumable: false,
              gzip: true,
            }, (err, callResult) => {
              if (err) reject(err);
              if (callResult) resolve(callResult);
            }),
          );
      },
    );

    return imageData.url;
  }
}
