import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedWhereUniqueInput } from "../../../inputs/BookUnverifiedWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;
}
