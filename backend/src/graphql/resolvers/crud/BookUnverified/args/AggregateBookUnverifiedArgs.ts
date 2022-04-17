import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedOrderByWithRelationInput } from "../../../inputs/BookUnverifiedOrderByWithRelationInput";
import { BookUnverifiedWhereInput } from "../../../inputs/BookUnverifiedWhereInput";
import { BookUnverifiedWhereUniqueInput } from "../../../inputs/BookUnverifiedWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  where?: BookUnverifiedWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookUnverifiedOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookUnverifiedWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
