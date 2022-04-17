import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedWhereInput } from "../../../inputs/BookUnverifiedWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  where?: BookUnverifiedWhereInput | undefined;
}
