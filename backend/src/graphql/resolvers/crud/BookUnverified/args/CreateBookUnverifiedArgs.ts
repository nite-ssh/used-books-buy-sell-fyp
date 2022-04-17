import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateInput } from "../../../inputs/BookUnverifiedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedCreateInput, {
    nullable: false
  })
  data!: BookUnverifiedCreateInput;
}
