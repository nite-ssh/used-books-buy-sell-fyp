import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedOrderByWithRelationInput } from "../../../inputs/BookUnverifiedOrderByWithRelationInput";
import { BookUnverifiedWhereInput } from "../../../inputs/BookUnverifiedWhereInput";
import { BookUnverifiedWhereUniqueInput } from "../../../inputs/BookUnverifiedWhereUniqueInput";
import { BookUnverifiedScalarFieldEnum } from "../../../../enums/BookUnverifiedScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserBookUnverifiedArgs {
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

  @TypeGraphQL.Field(_type => [BookUnverifiedScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "userId" | "price" | "author" | "bookPhoto" | "bookStateName" | "bookCategoryName"> | undefined;
}
