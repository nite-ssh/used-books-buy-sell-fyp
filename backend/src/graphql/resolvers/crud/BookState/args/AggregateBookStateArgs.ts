import * as TypeGraphQL from "type-graphql";
import { BookStateOrderByWithRelationInput } from "../../../inputs/BookStateOrderByWithRelationInput";
import { BookStateWhereInput } from "../../../inputs/BookStateWhereInput";
import { BookStateWhereUniqueInput } from "../../../inputs/BookStateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateWhereInput, {
    nullable: true
  })
  where?: BookStateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookStateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookStateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookStateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
